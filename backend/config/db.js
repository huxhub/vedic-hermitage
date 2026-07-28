import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;

export async function getDbPool() {
  if (pool) return pool;

  const host = process.env.DB_HOST || 'localhost';
  const port = Number(process.env.DB_PORT || 3306);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : 'root';
  const database = process.env.DB_NAME || 'vedic_hermitage_db';

  try {
    // 1. Create root connection to create database if not exists
    const rootConn = await mysql.createConnection({ host, port, user, password });
    await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await rootConn.end();

    // 2. Connection Pool to database
    pool = mysql.createPool({
      host,
      port,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // 3. Initialize schema & default seed data
    await initSchema(pool);

    console.log(`[MySQL DB] Successfully connected to "${database}"`);
    return pool;
  } catch (err) {
    console.error('[MySQL DB Connection Failed]:', err.message);
    throw err;
  }
}

async function initSchema(dbPool) {
  // Admin users table
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Packages table
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS packages (
      id VARCHAR(50) PRIMARY KEY,
      label VARCHAR(255),
      title VARCHAR(255) NOT NULL,
      price VARCHAR(100) NOT NULL,
      price_numeric INT NOT NULL,
      duration VARCHAR(100),
      subtitle VARCHAR(255),
      items JSON,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  // Feedbacks / Testimonials table
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS feedbacks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255),
      quote TEXT NOT NULL,
      rating INT DEFAULT 5,
      avatar VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Enquiries / Messages table
  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      phone VARCHAR(100),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed default admin user if empty
  const [adminRows] = await dbPool.query('SELECT COUNT(*) as count FROM admin_users');
  if (adminRows[0].count === 0) {
    await dbPool.query(
      'INSERT INTO admin_users (username, password) VALUES (?, ?)',
      ['admin', 'vedic2026']
    );
    console.log('[MySQL DB] Seeded initial admin credentials (username: admin)');
  }

  // Seed default packages if empty
  const [pkgRows] = await dbPool.query('SELECT COUNT(*) as count FROM packages');
  if (pkgRows[0].count === 0) {
    const defaultPkgs = [
      {
        id: '7day',
        label: 'Restorative Healing',
        title: '7-Day Rejuvenation Retreat',
        price: '₹45,000',
        price_numeric: 45000,
        duration: '7 Days',
        subtitle: 'Restorative Healing',
        items: JSON.stringify([
          'Initial Dosha assessment',
          'Daily Abhyanga massage',
          'Shirodhara therapy',
          'Yoga & meditation',
          'Satvik meals',
          'Premium Accommodation',
        ]),
      },
      {
        id: '14day',
        label: 'Deep Purification',
        title: '14-Day Panchakarma Detox',
        price: '₹85,000',
        price_numeric: 85000,
        duration: '14 Days',
        subtitle: 'Deep Purification',
        items: JSON.stringify([
          'Complete Panchakarma protocol',
          'Vamana & Virechana therapies',
          'Basti treatment',
          'Herbal steam bath',
          'Daily physician consultation',
          'All meals & accommodation',
        ]),
      },
      {
        id: '21day',
        label: 'Life Reset Program',
        title: '21-Day Total Transformation',
        price: '₹1,40,000',
        price_numeric: 140000,
        duration: '21 Days',
        subtitle: 'Life Reset Program',
        items: JSON.stringify([
          'Full Panchakarma + Rasayana',
          'Kshara Sutra consultation',
          'Intensive Yoga & Pranayama',
          'Personalized herbal medicine',
          'Nutritional counseling',
          'Luxury Suite Accommodation',
        ]),
      },
    ];

    for (const pkg of defaultPkgs) {
      await dbPool.query(
        'INSERT INTO packages (id, label, title, price, price_numeric, duration, subtitle, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [pkg.id, pkg.label, pkg.title, pkg.price, pkg.price_numeric, pkg.duration, pkg.subtitle, pkg.items]
      );
    }
    console.log('[MySQL DB] Seeded default retreat package prices');
  }

  // Seed default feedbacks if empty
  const [feedbackRows] = await dbPool.query('SELECT COUNT(*) as count FROM feedbacks');
  if (feedbackRows[0].count === 0) {
    const defaultFeedbacks = [
      {
        name: 'Sarah M.',
        location: 'United Kingdom',
        quote: 'An absolute sanctuary. The Shirodhara therapy completely reset my nervous system after years of burnout. Life-changing.',
        rating: 5,
      },
      {
        name: 'David L.',
        location: 'Australia',
        quote: 'The most authentic Ayurvedic experience I\'ve had. The physicians are incredibly knowledgeable and the nature surroundings are breathtaking.',
        rating: 5,
      },
      {
        name: 'Meera K.',
        location: 'India',
        quote: 'Ayurmana is where tradition lives. The Panchakarma detox was intense but I feel 10 years younger. Deeply grateful.',
        rating: 5,
      },
    ];

    for (const fb of defaultFeedbacks) {
      await dbPool.query(
        'INSERT INTO feedbacks (name, location, quote, rating) VALUES (?, ?, ?, ?)',
        [fb.name, fb.location, fb.quote, fb.rating]
      );
    }
    console.log('[MySQL DB] Seeded initial customer feedbacks');
  }
}
