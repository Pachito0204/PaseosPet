const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pet = require('./Pet');

const Walk = sequelize.define('Walk', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  distanceKm: { type: DataTypes.FLOAT, defaultValue: 0 },
  durationMin: { type: DataTypes.INTEGER, defaultValue: 0 },
  route: { type: DataTypes.JSONB, allowNull: true }, // opcional para coordenadas
  startedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'walks' });

Pet.hasMany(Walk, { foreignKey: 'petId', onDelete: 'CASCADE' });
Walk.belongsTo(Pet, { foreignKey: 'petId' });

module.exports = Walk;
