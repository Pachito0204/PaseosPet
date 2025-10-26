import express from 'express';
import { getAvailableWalks, createWalk } from '../controllers/walkController.js';
const router = express.Router();
router.get('/available', getAvailableWalks);
router.post('/', createWalk);
export default router;
