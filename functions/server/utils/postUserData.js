const db = require('../../db/db.js');

module.exports.postUserData = data => {
  
  const promise = new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(data);
    }
  }); // End of promise

  return promise;
};
