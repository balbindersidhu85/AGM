import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  apiKey: "AIzaSyDnaMMPKbGz_sRqrzSKnxSwYN16IaMVGjw",
  authDomain: "anantay-59873.firebaseapp.com",
  databaseURL: "https://anantay-59873-default-rtdb.firebaseio.com",
  projectId: "anantay-59873",
  storageBucket: "anantay-59873.appspot.com",
  messagingSenderId: "403604085010",
  appId: "1:403604085010:web:05b3327c2faa29eac53bcb"

});

var db = firebaseApp.firestore();

export { db };

