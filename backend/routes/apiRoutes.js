import express from 'express';
import {
  loginAdmin,
  getPackages,
  addPackage,
  updatePackages,
  deletePackage,
  getFeedbacks,
  addFeedback,
  deleteFeedback,
} from '../controllers/adminController.js';
import { handleContactEnquiry } from '../controllers/contactController.js';

const router = express.Router();

// Runtime Config API
router.get('/config', (req, res) => {
  res.json({
    whatsappNumber: process.env.WHATSAPP_NUMBER || '',
  });
});

// Admin Auth API
router.post('/admin/login', loginAdmin);

// Packages API
router.get('/packages', getPackages);
router.post('/packages', addPackage);
router.put('/packages', updatePackages);
router.delete('/packages/:id', deletePackage);

// Feedbacks / Testimonials API
router.get('/feedbacks', getFeedbacks);
router.post('/feedbacks', addFeedback);
router.delete('/feedbacks/:id', deleteFeedback);

// Contact Enquiry API
router.post('/contact', handleContactEnquiry);

export default router;
