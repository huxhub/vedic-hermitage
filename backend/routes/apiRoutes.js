import express from 'express';
import {
  loginAdmin,
  getPackages,
  addPackage,
  updatePackages,
  updateSinglePackage,
  deletePackage,
  getFeedbacks,
  addFeedback,
  updateFeedback,
  deleteFeedback,
  getBookings,
  createBooking,
  updateBookingStatus,
  deleteBooking,
  getSettings,
  updateSettings,
  updateAdminCredentials,
} from '../controllers/adminController.js';
import { handleContactEnquiry } from '../controllers/contactController.js';

const router = express.Router();

// Runtime Config / Settings API (Public)
router.get('/config', getSettings);
router.get('/settings', getSettings);
router.put('/settings', updateSettings);
router.put('/admin/credentials', updateAdminCredentials);

// Admin Auth API
router.post('/admin/login', loginAdmin);

// Packages API
router.get('/packages', getPackages);
router.post('/packages', addPackage);
router.put('/packages', updatePackages);
router.put('/packages/:id', updateSinglePackage);
router.delete('/packages/:id', deletePackage);

// Feedbacks / Testimonials API
router.get('/feedbacks', getFeedbacks);
router.post('/feedbacks', addFeedback);
router.put('/feedbacks/:id', updateFeedback);
router.delete('/feedbacks/:id', deleteFeedback);

// Retreat Bookings API
router.get('/bookings', getBookings);
router.post('/bookings', createBooking);
router.put('/bookings/:id/status', updateBookingStatus);
router.delete('/bookings/:id', deleteBooking);

// Contact Enquiry API
router.post('/contact', handleContactEnquiry);

export default router;
