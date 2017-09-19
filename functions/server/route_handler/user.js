const querystring = require('querystring');
const foursquare = require('./../api-config/foursquare-config.js');
const bodyParser = require('body-parser');
const utils = require('./../utils/util');

const credentials = {
  v: '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);

module.exports.postUser = (req, res) => {
  utils
    .postUserData(req)
    .then(data => {
      console.log('User Data posted successfully!');
      res.status(201).send(data);
    })
    .catch(err => {
      console.error('User Data NOT posted!');
      res.status(400).send(err);
    });
};

module.exports.getFridge = (req, res) => {
  utils
    .getFridgeData(req)
    .then(data => {
      console.log('Fridge Data gotten successfully!');
      res.status(200).send(data);
    })
    .catch(err => {
      console.error('No fridge data!');
      res.status(400).send(err);
    });
};

module.exports.postFridge = (req, res) => {
  utils
    .postFridgeData(req)
    .then(data => {
      console.log('Fridge Data posted successfully!');
      res.status(200).send(data);
    })
    .catch(err => {
      console.error('Fridge data did not post!');
      res.status(400).send(err);
    });
};