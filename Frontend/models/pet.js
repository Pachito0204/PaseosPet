import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Pet = sequelize.define('Pet', {
  name: DataTypes.STRING,
  species: DataTypes.STRING,
  breed: DataTypes.STRING,
  sex: DataTypes.STRING(1),
  weight_kg: DataTypes.FLOAT,
  birthdate: DataTypes.DATE,
  vax_record_url: DataTypes.STRING,
});
