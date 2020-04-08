import firebase from 'firebase/app'
import 'firebase/database/'
import 'firebase/analytics'
import 'firebase/firebase-functions'
import 'firebase/firebase-installations'
 
 const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_AUTHDOMAIN,
    storageBucket: process.env.REACT_APP_PROJECTID,
    messagingSenderId:process.env.REACT_APP_MESSAGESENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUR
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();
  firebase.analytics();
  export default firebase;