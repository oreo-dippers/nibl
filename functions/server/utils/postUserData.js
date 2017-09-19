const db = require('../../db/db.js');

module.exports.postUserData = data => {
  
  const promise = new Promise((resolve, reject) => {
    // console.log(data.body);

    const currentFirebaseUuid = data.body.userId;
    const currentUserData = data.body.userData;

    // FindOrCreate user where it equals firebaseId
    db.User
      .findOrCreate({
        where: {
          firebaseUuid: currentFirebaseUuid
        },
        // If it is not in the DishReview table, set these defaults:
        defaults: {
          firebaseUuid: currentFirebaseUuid,
          userData: currentUserData
        }
      }).then(user => {
        // console.log('user object is ', user);
        console.log('user object is ', user[0].dataValues);

        const userData = user[0].dataValues;
        
        // Send user's data back to the front end
        if (userData) {
          resolve(userData);
        } else {
          reject('No user was found or created due to unexpected data received');
        }
      });

  }); // End of promise

  return promise;
};
