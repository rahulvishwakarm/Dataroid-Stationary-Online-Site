// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJgf6F9UfhOmmrmjVFTbDBT8uCVFAH5Uk",
  authDomain: "dataroidstationarysite-61be8.firebaseapp.com",
  projectId: "dataroidstationarysite-61be8",
  storageBucket: "dataroidstationarysite-61be8.appspot.com",
  messagingSenderId: "274923514924",
  appId: "1:274923514924:web:fb76da403c0fa93b69f589",
  measurementId: "G-HKGCYY54MZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};