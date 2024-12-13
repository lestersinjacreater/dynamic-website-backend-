import express from 'express';
import connectDB from './config/db';
import updateRoutes from './routes/update.routes';
import testimonialRoutes from './routes/testimonial.routes';

const app = express();

// Middleware
app.use(express.json());
app.use('/api/updates', updateRoutes);
app.use('/api/testimonials', testimonialRoutes);

connectDB();

export default app;