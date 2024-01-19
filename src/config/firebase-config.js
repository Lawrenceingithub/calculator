// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7y2c8c4NV-sEAp1TtHuOrj7y5O65GTPc",
  authDomain: "calculator-d8296.firebaseapp.com",
  projectId: "calculator-d8296",
  storageBucket: "calculator-d8296.appspot.com",
  messagingSenderId: "1034664517549",
  appId: "1:1034664517549:web:fce5ea85e7cff4e85f0b24",
  measurementId: "G-70BV4P0DYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);