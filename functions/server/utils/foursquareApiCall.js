const requestPromise = require('request-promise');

module.exports.apiCall = function(url, callback) {
  requestPromise(url)
    .then(function(data) {
      callback(JSON.parse(data));
    })
    .catch(function (err) {
      console.log('error:', err);
      return;
    });
};