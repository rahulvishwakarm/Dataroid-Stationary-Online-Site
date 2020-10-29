// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQ8oaCByVXgJfIXhnv_lMAWKBH8nrCJu8",
  authDomain: "stationary-9b162.firebaseapp.com",
  databaseURL: "https://stationary-9b162.firebaseio.com",
  projectId: "stationary-9b162",
  storageBucket: "stationary-9b162.appspot.com",
  messagingSenderId: "139652295861",
  appId: "1:139652295861:web:decdaf767ae878a39662fc",
  measurementId: "G-JJ1B1FRPKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};