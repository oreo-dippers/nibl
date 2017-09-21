const utils = require('./../utils/util');

module.exports.postUser = (req, res) => {
  utils
    .postUserData(req)
    .then(data => {
      console.log('User Data posted successfully!');
      res.status(201).send(data);
    })
    .catch(err => {
      console.error('User Data NOT posted!');
      res.status(200).send(err);
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
      res.status(200).send(err);
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
      res.status(200).send(err);
    });
};