import express from 'express';
import { createUpdate, getUpdates, deleteUpdate } from '../controllers/update.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authMiddleware, createUpdate);
router.get('/', getUpdates);
router.delete('/:id', authMiddleware, deleteUpdate);

export default router;
