const express = require('express');
const Pet = require('../models/Pet');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  const pets = await Pet.findAll({ where: { userId: req.user.id } });
  res.json(pets);
});

router.post('/', async (req, res) => {
  const pet = await Pet.create({ ...req.body, userId: req.user.id });
  res.status(201).json(pet);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findOne({ where: { id, userId: req.user.id } });
  if (!pet) return res.status(404).json({ message: 'No encontrado' });
  await pet.update(req.body);
  res.json(pet);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const count = await Pet.destroy({ where: { id, userId: req.user.id } });
  res.json({ deleted: count > 0 });
});

module.exports = router;
