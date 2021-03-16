// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDp1wiSDkQvveN_MUIxZT5K3uHn382wk9c",
  authDomain: "dataroid-4cec5.firebaseapp.com",
  projectId: "dataroid-4cec5",
  storageBucket: "dataroid-4cec5.appspot.com",
  messagingSenderId: "161159105311",
  appId: "1:161159105311:web:6d204a1037ab5a9239fe2a",
  measurementId: "G-SEVFQJ21DH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};