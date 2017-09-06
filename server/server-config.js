const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var logger = require('morgan')
var routeHandler = require('./route-handler')

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/venue',routeHandler.getVenue);
app.get('/menu',routeHandler.getMenu);
app.get('/api/restaurants/',routeHandler.getRecommendation);

module.exports = app;