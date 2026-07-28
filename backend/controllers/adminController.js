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

// Update Package Prices
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
  const { name, location, quote, rating } = req.body;
  if (!name || !quote) {
    return res.status(400).json({ success: false, message: 'Name and quote are required.' });
  }

  try {
    const pool = await getDbPool();
    const [result] = await pool.query(
      'INSERT INTO feedbacks (name, location, quote, rating) VALUES (?, ?, ?, ?)',
      [name, location || '', quote, rating || 5]
    );

    return res.status(200).json({
      success: true,
      feedback: {
        id: result.insertId,
        name,
        location,
        quote,
        rating: rating || 5,
      },
    });
  } catch (err) {
    console.error('[Add Feedback Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to add feedback.' });
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
