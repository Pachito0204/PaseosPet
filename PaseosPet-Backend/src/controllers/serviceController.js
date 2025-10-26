import Service from '../models/Service.js';

export const getServices = async (req, res) => {
  const services = await Service.findAll();
  res.json(services);
};

export const addService = async (req, res) => {
  const s = await Service.create(req.body);
  res.json(s);
};
