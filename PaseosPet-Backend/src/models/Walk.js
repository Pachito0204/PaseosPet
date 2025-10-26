import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Pet from './Pet.js';
import User from './User.js';

const Walk = sequelize.define('Walk', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  distance: DataTypes.FLOAT,
  duration: DataTypes.INTEGER,
  status: { type: DataTypes.ENUM('pending', 'in_progress', 'completed'), defaultValue: 'pending' }
});

Walk.belongsTo(Pet, { foreignKey: 'petId' });
Walk.belongsTo(User, { as: 'walker', foreignKey: 'walkerId' });
Pet.hasMany(Walk, { foreignKey: 'petId' });

export default Walk;
