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

// Create New Booking
export const createBooking = async (req, res) => {
  const { package_name, package_price, guests, name, email, phone, country, arrival_date, health_notes } = req.body;
  if (!name || !email || !package_name) {
    return res.status(400).json({ success: false, message: 'Name, email, and package are required.' });
  }

  try {
    const pool = await getDbPool();
    const [result] = await pool.query(
      'INSERT INTO bookings (package_name, package_price, guests, name, email, phone, country, arrival_date, health_notes, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        package_name,
        package_price || '',
        guests || '01 Person',
        name,
        email,
        phone || '',
        country || '',
        arrival_date || '',
        health_notes || '',
        'Pending',
      ]
    );

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
