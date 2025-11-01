import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: DataTypes.STRING,
  role: { type: DataTypes.ENUM('owner','walker','admin'), defaultValue: 'owner' },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('active','banned'), defaultValue: 'active' }
});
