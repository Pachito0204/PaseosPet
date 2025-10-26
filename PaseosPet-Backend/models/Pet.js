const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Pet = sequelize.define('Pet', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  species: { type: DataTypes.STRING, defaultValue: 'dog' },
  breed: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.FLOAT }
}, { tableName: 'pets' });

User.hasMany(Pet, { foreignKey: 'userId', onDelete: 'CASCADE' });
Pet.belongsTo(User, { foreignKey: 'userId' });

module.exports = Pet;
