const db = require('../../db/db.js');

module.exports.postUserData = data => {
  
  const promise = new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject('Post User Data Promise rejected', data);
    }
  }); // End of promise

  return promise;
};
