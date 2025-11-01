import express from 'express';
import { ServicePrice } from '../models/servicePrice.js';

const router = express.Router();

router.get('/:id/prices', async (req, res) => {
  const { id } = req.params;
  const prices = await ServicePrice.findAll({ where: { walker_id: id, is_active: true } });
  res.json(prices);
});

export default router;
