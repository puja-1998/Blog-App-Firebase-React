// Import the functions you need from the SDKs you need

import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpartF5S0pEmYnFxnAHWvGH8KBPqSY04c",
  authDomain: "blog-app-auth-3673d.firebaseapp.com",
  projectId: "blog-app-auth-3673d",
  storageBucket: "blog-app-auth-3673d.firebasestorage.app",
  messagingSenderId: "722362116465",
  appId: "1:722362116465:web:78f10486e4e07606fd6ed0",
  measurementId: "G-HQ1J3RRSMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Authentiction Service
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore Database Service
export const firestore = getFirestore(app)