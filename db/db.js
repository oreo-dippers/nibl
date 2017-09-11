const Sequelize = require('sequelize');

// For local variable loading
const dotenv = require('dotenv');
dotenv.load();

// Make new Sequelize instance to PG DB linked
const db = new Sequelize(process.env.POSTGRES_URL);

// Ensure db makes connection 
db
  .authenticate()
  .then(() => {
    console.log('Postgres Database connection established successfully!');
  })
  .catch(err => {
    console.error('Postgres Database connection failed: ', err);
  });

module.exports = db;