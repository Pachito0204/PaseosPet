import Walk from '../models/Walk.js';

export const getAvailableWalks = async (req, res) => {
  const walks = await Walk.findAll({ where: { status: 'pending' } });
  res.json(walks);
};

export const createWalk = async (req, res) => {
  const walk = await Walk.create(req.body);
  res.json(walk);
};
