const request = require('request')

module.exports.apiCall = function(url, callback) {
    request(url, function (error, response, body) {
    // Print the error if one occurred
    if(error) {
      console.log('error:', error);
      return;
    }
    // Print the response status code if a response was received
    if(response) {
      console.log('statusCode:', response && response.statusCode);
    }

    callback(JSON.parse(body));
  });
};