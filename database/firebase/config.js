// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvo5px54HpCzyHDQcyXDm0Xz-h0cXN-v8",
  authDomain: "express-obed.firebaseapp.com",
  projectId: "express-obed",
  storageBucket: "express-obed.appspot.com",
  messagingSenderId: "1033976268137",
  appId: "1:1033976268137:web:db38859fc6f44cd1eea9f8",
  measurementId: "G-6R0TYQS5LH",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
