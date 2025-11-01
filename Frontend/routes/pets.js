import express from 'express';
import jwt from 'jsonwebtoken';
import { Pet } from '../models/pet.js';

const router = express.Router();

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido' });
  }
};

router.get('/', auth, async (req, res) => {
  const pets = await Pet.findAll({ where: { user_id: req.user.sub } });
  res.json(pets);
});

router.post('/', auth, async (req, res) => {
  const pet = await Pet.create({ ...req.body, user_id: req.user.sub });
  res.status(201).json(pet);
});

export default router;
