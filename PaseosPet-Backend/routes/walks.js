const express = require('express');
const Walk = require('../models/Walk');
const Pet = require('../models/Pet');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  const { petId } = req.query;
  const where = petId ? { petId } : {};
  const walks = await Walk.findAll({ where, order: [['startedAt','DESC']] });
  res.json(walks);
});

router.post('/', async (req, res) => {
  const { petId, distanceKm, durationMin, route } = req.body;
  const pet = await Pet.findByPk(petId);
  if (!pet) return res.status(404).json({ message: 'Mascota no encontrada' });
  const walk = await Walk.create({ petId, distanceKm, durationMin, route });
  res.status(201).json(walk);
});

module.exports = router;
