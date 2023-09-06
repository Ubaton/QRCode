import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GOOGLE_AOTH_APIKEY,
  authDomain: "qr-code-generator-9e005.firebaseapp.com",
  projectId: "qr-code-generator-9e005",
  storageBucket: "qr-code-generator-9e005.appspot.com",
  messagingSenderId: "755518940921",
  appId: "1:755518940921:web:d56436aaffaeaa1f5fe428",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
