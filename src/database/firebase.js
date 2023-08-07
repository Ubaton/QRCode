// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmr4gsbYMNiW-QlPuBfrVq1mpbtvK4rX0",
  authDomain: "qr-code-generator-f1b84.firebaseapp.com",
  projectId: "qr-code-generator-f1b84",
  storageBucket: "qr-code-generator-f1b84.appspot.com",
  messagingSenderId: "398245832265",
  appId: "1:398245832265:web:b0046396ee7f727dfc0198",
  measurementId: "G-C7961E2H0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
