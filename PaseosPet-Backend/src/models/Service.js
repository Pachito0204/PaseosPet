import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Service = sequelize.define('Service', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  category: DataTypes.ENUM('peluqueria', 'seguro', 'salud', 'funerario', 'alimentacion')
});

export default Service;
