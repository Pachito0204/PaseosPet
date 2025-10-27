const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://paseospet_db_user:NIiqVSxr59BKVbMsyhub3bqeSA2nzCAM@dpg-d3v77cu3jp1c7389a14g-a.oregon-postgres.render.com/paseospet_db', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = { sequelize };
