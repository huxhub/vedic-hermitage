import nodemailer from 'nodemailer';
import { getDbPool } from '../config/db.js';

// Admin Login
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  try {
    const pool = await getDbPool();
    const [rows] = await pool.query(
      'SELECT * FROM admin_users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({
        success: true,
        username: rows[0].username,
        token: 'admin-token-' + Date.now(),
      });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid admin username or password.' });
    }
  } catch (err) {
    console.error('[Admin Login Error]:', err);
    return res.status(500).json({ success: false, message: 'Database login error.' });
  }
};

// Get All Packages
export const getPackages = async (req, res) => {
  try {
    const pool = await getDbPool();
    const [rows] = await pool.query('SELECT * FROM packages');
    const formatted = rows.map((r) => ({
      ...r,
      items: typeof r.items === 'string' ? JSON.parse(r.items) : (r.items || []),
    }));

    return res.status(200).json({ success: true, packages: formatted });
  } catch (err) {
    console.error('[Get Packages Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch packages.' });
  }
};

// Add New Package
export const addPackage = async (req, res) => {
  const { title, price, subtitle, duration, items } = req.body;
  if (!title || !price) {
    return res.status(400).json({ success: false, message: 'Title and price are required.' });
  }

  try {
    const pool = await getDbPool();
    const id = 'pkg_' + Date.now();
    const numericPrice = parseInt(String(price).replace(/[^\d]/g, ''), 10) || 0;
    const itemsArray = Array.isArray(items) ? items : (typeof items === 'string' ? items.split(',').map((s) => s.trim()) : []);
    const itemsJson = JSON.stringify(itemsArray);

    await pool.query(
      'INSERT INTO packages (id, label, title, price, price_numeric, duration, subtitle, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, subtitle || 'Custom Retreat', title, price, numericPrice, duration || '7 Days', subtitle || 'Custom Retreat', itemsJson]
    );

    return res.status(200).json({
      success: true,
      package: {
        id,
        label: subtitle || 'Custom Retreat',
        title,
        price,
        price_numeric: numericPrice,
        duration: duration || '7 Days',
        subtitle: subtitle || 'Custom Retreat',
        items: itemsArray,
      },
    });
  } catch (err) {
    console.error('[Add Package Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to add package to database.' });
  }
};

// Update Package Prices Array
export const updatePackages = async (req, res) => {
  const { packages } = req.body;
  if (!Array.isArray(packages)) {
    return res.status(400).json({ success: false, message: 'Packages array is required.' });
  }

  try {
    const pool = await getDbPool();
    for (const pkg of packages) {
      const numericPrice = pkg.price_numeric || parseInt(String(pkg.price).replace(/[^\d]/g, ''), 10) || 0;
      await pool.query(
        'UPDATE packages SET price = ?, price_numeric = ? WHERE id = ?',
        [pkg.price, numericPrice, pkg.id]
      );
    }
    return res.status(200).json({ success: true, message: 'Package prices updated successfully in MySQL!' });
  } catch (err) {
    console.error('[Update Packages Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update package prices in database.' });
  }
};

// Update Single Package
export const updateSinglePackage = async (req, res) => {
  const { id } = req.params;
  const { title, price, subtitle, duration, items } = req.body;

  try {
    const pool = await getDbPool();
    const numericPrice = parseInt(String(price).replace(/[^\d]/g, ''), 10) || 0;
    const itemsArray = Array.isArray(items) ? items : (typeof items === 'string' ? items.split(',').map((s) => s.trim()) : []);
    const itemsJson = JSON.stringify(itemsArray);

    await pool.query(
      'UPDATE packages SET title = ?, price = ?, price_numeric = ?, subtitle = ?, label = ?, duration = ?, items = ? WHERE id = ?',
      [title, price, numericPrice, subtitle || '', subtitle || '', duration || '7 Days', itemsJson, id]
    );

    return res.status(200).json({
      success: true,
      package: {
        id,
        title,
        price,
        price_numeric: numericPrice,
        subtitle: subtitle || '',
        label: subtitle || '',
        duration: duration || '7 Days',
        items: itemsArray,
      },
    });
  } catch (err) {
    console.error('[Update Single Package Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update package in database.' });
  }
};

// Delete Package
export const deletePackage = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getDbPool();
    await pool.query('DELETE FROM packages WHERE id = ?', [id]);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Delete Package Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete package.' });
  }
};

// Get All Customer Feedbacks
export const getFeedbacks = async (req, res) => {
  try {
    const pool = await getDbPool();
    const [rows] = await pool.query('SELECT * FROM feedbacks ORDER BY id DESC');
    return res.status(200).json({ success: true, feedbacks: rows });
  } catch (err) {
    console.error('[Get Feedbacks Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch feedbacks.' });
  }
};

// Add New Customer Feedback
export const addFeedback = async (req, res) => {
  const { name, location, quote, rating, avatar } = req.body;
  if (!name || !quote) {
    return res.status(400).json({ success: false, message: 'Name and quote are required.' });
  }

  try {
    const pool = await getDbPool();
    const [result] = await pool.query(
      'INSERT INTO feedbacks (name, location, quote, rating, avatar) VALUES (?, ?, ?, ?, ?)',
      [name, location || '', quote, rating || 5, avatar || '']
    );

    return res.status(200).json({
      success: true,
      feedback: {
        id: result.insertId,
        name,
        location,
        quote,
        rating: rating || 5,
        avatar: avatar || '',
      },
    });
  } catch (err) {
    console.error('[Add Feedback Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to add feedback.' });
  }
};

// Update Customer Feedback
export const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { name, location, quote, rating, avatar } = req.body;

  try {
    const pool = await getDbPool();
    await pool.query(
      'UPDATE feedbacks SET name = ?, location = ?, quote = ?, rating = ?, avatar = ? WHERE id = ?',
      [name, location || '', quote, rating || 5, avatar || '', id]
    );

    return res.status(200).json({
      success: true,
      feedback: {
        id: Number(id),
        name,
        location: location || '',
        quote,
        rating: rating || 5,
        avatar: avatar || '',
      },
    });
  } catch (err) {
    console.error('[Update Feedback Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update feedback in database.' });
  }
};

// Delete Customer Feedback
export const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: 'Feedback ID is required.' });
  }

  try {
    const pool = await getDbPool();
    await pool.query('DELETE FROM feedbacks WHERE id = ?', [id]);
    return res.status(200).json({ success: true, message: 'Feedback deleted successfully.' });
  } catch (err) {
    console.error('[Delete Feedback Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete feedback.' });
  }
};

// Get All Bookings
export const getBookings = async (req, res) => {
  try {
    const pool = await getDbPool();
    const [rows] = await pool.query('SELECT * FROM bookings ORDER BY id DESC');
    return res.status(200).json({ success: true, bookings: rows });
  } catch (err) {
    console.error('[Get Bookings Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch bookings.' });
  }
};

// Create New Booking & Send Admin Email Notification
export const createBooking = async (req, res) => {
  const { package_name, package_price, guests, name, email, phone, country, city, arrival_date, health_notes } = req.body;
  if (!name || !email || !package_name) {
    return res.status(400).json({ success: false, message: 'Name, email, and package are required.' });
  }

  try {
    const pool = await getDbPool();
    const [result] = await pool.query(
      'INSERT INTO bookings (package_name, package_price, guests, name, email, phone, country, city, arrival_date, health_notes, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        package_name,
        package_price || '',
        guests || '01 Person',
        name,
        email,
        phone || '',
        country || '',
        city || '',
        arrival_date || '',
        health_notes || '',
        'Pending',
      ]
    );

    // Send Booking Email Notification to Admin
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || emailUser;

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: emailUser, pass: emailPass },
        });

        const dateStr = new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

        const emailHtml = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #f7faf6; padding: 20px; border-radius: 12px;">
            <div style="background-color: #1b331c; border-radius: 10px 10px 0 0; padding: 30px 25px; text-align: center; border-bottom: 4px solid #c4622d;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; font-family: Georgia, serif;">VEDIC HERMITAGE</h1>
              <p style="color: #d4a843; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;">New Retreat Reservation Request</p>
            </div>
            <div style="background-color: #ffffff; border-radius: 0 0 10px 10px; padding: 30px 25px; border: 1px solid #e2ded8; border-top: none;">
              
              <div style="background-color: #faf0ea; border: 1px solid #f5dfd5; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
                <span style="color: #c4622d; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Selected Retreat Package</span>
                <h2 style="color: #2d241e; margin: 4px 0 0 0; font-size: 20px; font-weight: 600;">${package_name}</h2>
                <p style="color: #2c4a2e; margin: 4px 0 0 0; font-size: 14px; font-weight: 700;">Price: ${package_price || 'Standard Rate'}</p>
              </div>

              <h3 style="color: #2c4a2e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #f0eae1; padding-bottom: 8px;">Guest & Booking Details</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; width: 140px; border-bottom: 1px solid #f5f0eb;">Guest Name</td>
                  <td style="padding: 10px 12px; color: #2d241e; font-weight: 600; border-bottom: 1px solid #f5f0eb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Email Address</td>
                  <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">
                    <a href="mailto:${email}" style="color: #c4622d; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Phone Number</td>
                  <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">
                    ${phone ? `<a href="tel:${phone}" style="color: #2c4a2e; text-decoration: none; font-weight: 600;">${phone}</a>` : '<span style="color: #999;">Not Provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Country</td>
                  <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">${country || 'Not Specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">City / Place</td>
                  <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">${city || 'Not Specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Number of Guests</td>
                  <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">${guests || '01 Person'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Arrival Date</td>
                  <td style="padding: 10px 12px; color: #2d241e; font-weight: 600; border-bottom: 1px solid #f5f0eb;">${arrival_date || 'To be scheduled'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600;">Booked On</td>
                  <td style="padding: 10px 12px; color: #786c62; font-size: 13px;">${dateStr}</td>
                </tr>
              </table>

              ${health_notes ? `
                <h3 style="color: #2c4a2e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px;">Health Notes / Special Needs</h3>
                <div style="background-color: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 15px; color: #713f12; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">${health_notes}</div>
              ` : ''}

              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="background-color: #c4622d; color: #ffffff; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply to Guest</a>
              </div>
            </div>
            <div style="text-align: center; padding-top: 15px; color: #8c7e72; font-size: 12px;">
              Sent via Vedic Hermitage Booking System
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Vedic Hermitage Reservations" <${emailUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `🔔 New Booking: ${package_name} - ${name}`,
          html: emailHtml,
        });
        console.log(`[Nodemailer] Booking notification sent to admin: ${recipientEmail}`);
      } catch (mailErr) {
        console.error('[Booking Email Notification Error]:', mailErr);
      }
    }

    return res.status(200).json({
      success: true,
      booking: {
        id: result.insertId,
        package_name,
        package_price: package_price || '',
        guests: guests || '01 Person',
        name,
        email,
        phone: phone || '',
        country: country || '',
        city: city || '',
        arrival_date: arrival_date || '',
        health_notes: health_notes || '',
        status: 'Pending',
        created_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error('[Create Booking Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to save booking.' });
  }
};

// Update Booking Status
export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const pool = await getDbPool();
    await pool.query('UPDATE bookings SET status = ? WHERE id = ?', [status || 'Pending', id]);
    return res.status(200).json({ success: true, message: 'Booking status updated.' });
  } catch (err) {
    console.error('[Update Booking Status Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update booking status.' });
  }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getDbPool();
    await pool.query('DELETE FROM bookings WHERE id = ?', [id]);
    return res.status(200).json({ success: true, message: 'Booking deleted.' });
  } catch (err) {
    console.error('[Delete Booking Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete booking.' });
  }
};

// Get Site Settings (WhatsApp Number & Contact Number)
export const getSettings = async (req, res) => {
  try {
    const pool = await getDbPool();
    const [rows] = await pool.query('SELECT * FROM settings WHERE id = 1');
    if (rows.length > 0) {
      return res.status(200).json({
        success: true,
        settings: {
          whatsapp_number: rows[0].whatsapp_number || '+91 90613 13555',
          contact_number: rows[0].contact_number || '+91 90613 13555',
        },
      });
    }
  } catch (err) {
    console.error('[Get Settings Error]:', err);
  }
  return res.status(200).json({
    success: true,
    settings: {
      whatsapp_number: process.env.WHATSAPP_NUMBER || '+91 90613 13555',
      contact_number: process.env.CONTACT_NUMBER || '+91 90613 13555',
    },
  });
};

// Update Site Settings
export const updateSettings = async (req, res) => {
  const { whatsapp_number, contact_number } = req.body;
  try {
    const pool = await getDbPool();
    await pool.query(
      'INSERT INTO settings (id, whatsapp_number, contact_number) VALUES (1, ?, ?) ON DUPLICATE KEY UPDATE whatsapp_number = VALUES(whatsapp_number), contact_number = VALUES(contact_number)',
      [whatsapp_number || '+91 90613 13555', contact_number || '+91 90613 13555']
    );
    return res.status(200).json({
      success: true,
      message: 'Site settings updated successfully!',
      settings: {
        whatsapp_number: whatsapp_number || '+91 90613 13555',
        contact_number: contact_number || '+91 90613 13555',
      },
    });
  } catch (err) {
    console.error('[Update Settings Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update settings.' });
  }
};

// Update Admin Username & Password
export const updateAdminCredentials = async (req, res) => {
  const { current_password, new_username, new_password } = req.body;
  if (!current_password || !new_username || !new_password) {
    return res.status(400).json({
      success: false,
      message: 'Current password, new username, and new password are required.',
    });
  }

  try {
    const pool = await getDbPool();
    // Verify current password
    const [rows] = await pool.query('SELECT * FROM admin_users WHERE password = ? LIMIT 1', [current_password]);
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Incorrect current password.' });
    }

    const adminId = rows[0].id;
    await pool.query('UPDATE admin_users SET username = ?, password = ? WHERE id = ?', [
      new_username,
      new_password,
      adminId,
    ]);

    return res.status(200).json({
      success: true,
      message: 'Admin credentials updated successfully!',
      username: new_username,
    });
  } catch (err) {
    console.error('[Update Admin Credentials Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to update admin credentials.' });
  }
};
