import firebase from "firebase/app";
import 'firebase/firestore';
require('dotenv').config()

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

  const app = firebase.initializeApp({
  apiKey: "AIzaSyBYvZH3XXpnGj3fwQ04cgKXMgoXBgCzudI",
  authDomain: "taste-message-box.firebaseapp.com",
  databaseURL: "https://taste-message-box.firebaseio.com",
  projectId: "taste-message-box",
  storageBucket: "taste-message-box.appspot.com",
  messagingSenderId: "771726690501",
  appId: "1:771726690501:web:05f8ef1654030b08c708ac"
});

var db = app.firestore();
export { db };
