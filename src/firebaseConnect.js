import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBwfnMmMkn3Yf4SEkhqPgzpvauisR3flZE",
    authDomain: "login-2c264.firebaseapp.com",
    databaseURL: "https://login-2c264.firebaseio.com",
    projectId: "login-2c264",
    storageBucket: "",
    messagingSenderId: "133952806281",
    appId: "1:133952806281:web:1554ec568ec94f8b4b5558"
  };
  // Initialize Firebase
  // export const firebaseConnect = firebase.initializeApp(config);
  // var data = firebase.database().ref('login');
  firebase.initializeApp(config);
   export const users = firebase.database().ref('login');
  