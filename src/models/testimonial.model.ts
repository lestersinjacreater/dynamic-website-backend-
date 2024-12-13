import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  clientName: string;
  message: string;
  isApproved: boolean;
  createdAt: Date;
}

const TestimonialSchema: Schema = new Schema({
  clientName: { type: String, required: true },
  message: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);