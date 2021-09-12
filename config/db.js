const { Sequelize } = require('sequelize');
const conn = new Sequelize(process.env.PG, {
  freezeTableName: true,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = conn;
