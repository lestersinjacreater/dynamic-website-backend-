import express from 'express';
import { createTestimonial, getTestimonials, approveTestimonial, deleteTestimonial } from '../controllers/testimonial.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', createTestimonial);
router.get('/', getTestimonials);
router.patch('/:id/approve', authMiddleware, approveTestimonial);
router.delete('/:id', authMiddleware, deleteTestimonial);

export default router;