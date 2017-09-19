const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const routeHandler = require('./routeHandler');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/seed/', routeHandler.seeds);

// REST endpoint for searching restaurants nearby
app.get('/api/restaurants/', routeHandler.getRestaurants);

// REST endpoint for getting detail of single restaurant
app.get('/api/restaurants/page', routeHandler.getMenu);

// REST endpoint for searching dishes
app.get('/api/dishes', routeHandler.getDummy);

// REST endpoint for posting review of a dish
app.post('/api/dishes/review', routeHandler.postDishReview);

// REST endpoint for getting reviews of a dish
app.get('/api/dishes/review', routeHandler.getDishReview);

// REST endpoint for saving user profile
app.post('/api/user', routeHandler.postUser);

// REST endpoint for getting user saved Dish
app.get('/api/user/fridge', routeHandler.getFridge);

// REST endpoint for saving dish user want to eat later.
app.post('/api/user/fridge', routeHandler.getDummy);

// REST endpoint for getting user saved restaurants
app.get('/api/user/saved-restaurants', routeHandler.getDummy);

// REST endpoint for saving restaurants user want to visit later.
app.post('/api/user/saved-restaurants', routeHandler.getDummy);

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});

module.exports = app;
