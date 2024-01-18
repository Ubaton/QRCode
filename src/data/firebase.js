import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsRXkfClni0n5o6mm42pxBikoItJ2tI8s",
  authDomain: "qr-code-generator-9e005.firebaseapp.com",
  projectId: "qr-code-generator-9e005",
  storageBucket: "qr-code-generator-9e005.appspot.com",
  messagingSenderId: "755518940921",
  appId: "1:755518940921:web:d56436aaffaeaa1f5fe428",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
