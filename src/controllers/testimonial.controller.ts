import { Request, Response } from 'express';
import Testimonial from '../models/testimonial.model';

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const { clientName, message } = req.body;
    const newTestimonial = await Testimonial.create({ clientName, message });
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
};

export const getTestimonials = async (_req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

export const approveTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve testimonial' });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};