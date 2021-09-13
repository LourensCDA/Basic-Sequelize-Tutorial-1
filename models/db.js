const db_conn = require('../config/db');

module.exports = async function () {
  await db_conn.authenticate();

  const db_ver = await db_conn.databaseVersion();

  console.log(`PostgreSQL Connected: ${db_ver}`.cyan.underline.bold);

  if (process.env.NODE_ENV === 'Dev') {
    await db_conn.sync({ force: true }); // re-create models and tables
    console.log(`PostgreSQL Tables Created`.blue);
  } else {
    await db_conn.sync(); // create models
  }
};
