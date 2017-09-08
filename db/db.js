const Sequelize = require('sequelize');

// For local variable loading
const dotenv = require('dotenv');
dotenv.load();

// Make new Sequelize instance to PG DB linked
const sequelize = new Sequelize(process.env.POSTGRES_URL);

// Ensure sequelize makes connection 
sequelize
  .authenticate()
  .then(() => {
    console.log('Postgres Database connection established successfully!');
  })
  .catch(err => {
    console.error('Postgres Database connection failed: ', err);
  });

module.exports = sequelize;