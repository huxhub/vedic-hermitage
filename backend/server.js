import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes.js';
import { getDbPool } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Root health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    app: 'Vedic Hermitage Backend Server API',
    timestamp: new Date(),
  });
});

// Start Express Server & MySQL DB initialization
app.listen(PORT, async () => {
  console.log(`[Express Backend] Server running on http://localhost:${PORT}`);
  try {
    await getDbPool();
  } catch (err) {
    console.error('[Database Initialization Failed]:', err.message);
  }
});
