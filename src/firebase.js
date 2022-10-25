// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiFxcDwqJz7_i0bqVLI2bPGDZ7_D4qmOI",
  authDomain: "react-js-f1017.firebaseapp.com",
  projectId: "react-js-f1017",
  storageBucket: "react-js-f1017.appspot.com",
  messagingSenderId: "476329715108",
  appId: "1:476329715108:web:6dc7ea8e669a34ba24cd31",
  measurementId: "G-ZDSY1PMWET"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users : firestore.collection('users')
}

export const storage = firebase.storage();