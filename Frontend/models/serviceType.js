import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const ServiceType = sequelize.define('ServiceType', {
  code: { type: DataTypes.STRING, unique: true },
  name: DataTypes.STRING,
});
