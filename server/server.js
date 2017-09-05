const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var logger = require('morgan')
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/foursquare', function (req, res) {
  res.send('Hello foursquare')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})