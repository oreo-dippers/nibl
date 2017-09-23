# Nibl
# Getting Started and Installing Dependencies


To get the app running locally, first cd in the the directory, then you want to do a

```javascript
npm install
```
then run two commands, the first to run webpack the other to run the cloud functions from firebase

```javascript
npm run dev  // runs webpack
npm run serve // runs cloud functions
```


# Configuring Environment Variables
We used postgreSQL and firebase, and FourSquare API. So you will need keys from those


## Firebase
For firebase you would need a file named "firebase.js" inside the folder src > components...The file would look like this



```javascript
import firebase from 'firebase';

const config = {
	apiKey: 'xxxxxx_xx_xxxxxxxxxxxx_xxxxxx',
	authDomain: 'oreoxxxx.firebasexxx.com',
	databaseURL: 'https://oreo-xxxx.xxxx.com',
	projectId: 'oreo-nibl',
	storageBucket: 'oreo-nibl.xxxxt.com',
	messagingSenderId: 'xxxxxxxxxxx'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

```


You can get this file from inside of the Firebase Console if you click on Web SetUp


## FourSquare API


In the functions folder inside server make a folder called api-config. Inside the folder make a file called "foursquare-config.js". Sign up for an account at FourSquare to get the API Key. This is what that file would look like



```javascript
const functions = require("firebase-functions");
module.exports.CLIENT_ID = functions.config().foursquare.client_id;
module.exports.CLIENT_SECRET = functions.config().foursquare.client_secret;
```


The API keys are inside a file in the root of functions as a file called ".runtimeconfig.json" This is what the file looks like



```javascript
{
    "postgres": {
      "postgres_url": "postgres://0000:0000000@000.0000.00.0000:00000/postgres"
    },
    "foursquare": {
      "client_id": "IASOWEHFAOSQWELIKJOIJDPOFJASPDOFJQPPSD",
      "client_secret": "5DJKLFH19083HRFLAHDF9103HRI1NLKDSUF0193FHLKDSSTES0PZ"
    }
  }
```


To load it locally you can run this command

```javascript
firebase functions:config:get > .runtimeconfig.json
```


To check it you can run this command

```javascript
firebase functions:config:get
```
## PostgreSQL


Other from the postgres stuff above, you also need a ".env" file in the root of your application. It will have the POSTGRES_URL inside of it. It would look like

```javascript
POSTGRES_URL=postgres:"asdf//0000:0000000@000.0000.00.0000:00000/postgres"
```


## Testing

You will need a file inside functions/test/ named firebaseConfig.js which would help mock config variable for testing, along with this you will need .runtimeconfig.json which you have already completed during FourSquare API.

firebaseConfig.js would look like this
```
module.exports.config = {
  apiKey: 'xxxxxx_xx_xxxxxxxxxxxx_xxxxxx',
  authDomain: 'oreoxxxx.firebasexxx.com',
  databaseURL: 'https://oreo-xxxx.xxxx.com',
  projectId: 'oreo-nibl',
  storageBucket: 'oreo-nibl.xxxxt.com',
  messagingSenderId: 'xxxxxxxxxxx'
};
```


# Development Environment
We are running MACOSX and Windows. We use Visual Studio Code. Some of the packages we have for VSCode is ESLINT and Prettier.  For reading tables inside of Postgres you can use Postico on the Mac or PgAdmin on Windows.






















