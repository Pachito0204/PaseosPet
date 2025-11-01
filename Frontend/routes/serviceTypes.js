import express from 'express';
import { ServiceType } from '../models/serviceType.js';

const router = express.Router();
router.get('/', async (req, res) => {
  const data = await ServiceType.findAll();
  res.json(data);
});
export default router;
