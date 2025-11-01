import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const ServicePrice = sequelize.define('ServicePrice', {
  walker_id: DataTypes.INTEGER,
  service_type_id: DataTypes.INTEGER,
  city: DataTypes.STRING,
  base_price: DataTypes.FLOAT,
  currency: DataTypes.STRING(3),
  is_active: DataTypes.BOOLEAN,
});
