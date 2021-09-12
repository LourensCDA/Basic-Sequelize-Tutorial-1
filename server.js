const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');

// https://www.bezkoder.com/node-express-sequelize-postgresql/

// load config file
dotenv.config({ path: './config/.env' });

const connectDB = require('./controllers/db'); // postgresql conn
connectDB(); // connect to db

// route files
const tutorials = require('./routes/tutorials');

const app = express();

var corsOptions = {
  origin: process.env.CORSURL + ':' + process.env.PORT,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/tutorials', tutorials);

// simple route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to bezkoder application.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});
