// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTIYN9tZ4Jp37ppnk_dUd7AQSkYGvZEUQ",
  authDomain: "stationary-online-store.firebaseapp.com",
  databaseURL: "https://stationary-online-store.firebaseio.com",
  projectId: "stationary-online-store",
  storageBucket: "stationary-online-store.appspot.com",
  messagingSenderId: "48980674359",
  appId: "1:48980674359:web:9afb1c756eb25189343cb2",
  measurementId: "G-P4SHDQP9S4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};