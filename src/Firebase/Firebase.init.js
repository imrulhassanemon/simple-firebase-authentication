// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfx44rGG6N6AsF9iz9PRj7aOAwcuYCLaw",
  authDomain: "simple-firebase-authenti-b2f29.firebaseapp.com",
  projectId: "simple-firebase-authenti-b2f29",
  storageBucket: "simple-firebase-authenti-b2f29.firebasestorage.app",
  messagingSenderId: "487784754777",
  appId: "1:487784754777:web:c6dad7d1ce6effacc1cb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;