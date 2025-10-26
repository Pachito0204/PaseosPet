import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './User.js';

const Pet = sequelize.define('Pet', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING,
  especie: DataTypes.STRING,
  raza: DataTypes.STRING,
  edad: DataTypes.INTEGER
});

Pet.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Pet, { foreignKey: 'userId' });

export default Pet;
