import { Request, Response } from 'express';
import Update from '../models/update.model';

export const createUpdate = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newUpdate = await Update.create({ title, content });
    res.status(201).json(newUpdate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create update' });
  }
};

export const getUpdates = async (_req: Request, res: Response) => {
  try {
    const updates = await Update.find();
    res.status(200).json(updates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch updates' });
  }
};

export const deleteUpdate = async (req: Request, res: Response) => {
  try {
    await Update.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Update deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete update' });
  }
};