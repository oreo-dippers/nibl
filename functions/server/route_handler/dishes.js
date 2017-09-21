const utils = require('./../utils/util');

module.exports.postDishReview = (req, res) => {
  utils
    .postDishReviewData(req)
    .then(data => {
      console.log('Dish Review Data posted successfully!');
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(200).send(err);
    });
};

module.exports.getDishReview = (req, res) => {
  utils
    .getDishReviewData(req)
    .then(data => {
      console.log('dishReview Data gotten successfully!');
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(200).send(err);
    });
};
