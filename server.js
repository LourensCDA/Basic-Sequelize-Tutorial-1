const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// https://www.bezkoder.com/node-express-sequelize-postgresql/

// load config file
dotenv.config({ path: './config/.env' });

const app = express();

var corsOptions = {
  origin: process.env.CORSURL + ':' + process.env.PORT,
};

app.use(cors(corsOptions));

// simple route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to bezkoder application.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
