const db_conn = require('../config/db');

const connectDB = async () => {
  await db_conn.authenticate();

  const db_ver = await db_conn.databaseVersion();

  console.log(`PostgreSQL Connected: ${db_ver}`.cyan.underline.bold);

  await db_conn.sync(); // create models

  console.log(`PostgreSQL Tables Created`.blue);
};

module.exports = connectDB;
