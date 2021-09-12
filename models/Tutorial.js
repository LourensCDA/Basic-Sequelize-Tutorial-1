const { DataTypes } = require('sequelize');
const db_conn = require('../config/db');

const Tutorial = db_conn.define('tutorial', {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Tutorial;
