// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaj3YPr1bGw3QVSGDWO8EBVYMS0cH-0-U",
  authDomain: "dataroid-stationary.firebaseapp.com",
  projectId: "dataroid-stationary",
  storageBucket: "dataroid-stationary.appspot.com",
  messagingSenderId: "401722007116",
  appId: "1:401722007116:web:c2a76436ae442c54e5dee9",
  measurementId: "G-6E6CKZFWFP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};