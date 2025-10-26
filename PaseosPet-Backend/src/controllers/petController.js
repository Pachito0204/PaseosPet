import Pet from '../models/Pet.js';

export const getPets = async (req, res) => {
  const pets = await Pet.findAll();
  res.json(pets);
};

export const addPet = async (req, res) => {
  const pet = await Pet.create(req.body);
  res.json(pet);
};
