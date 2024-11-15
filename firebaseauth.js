// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BpVO5ibZc2yIT3J09cpdxwJeKl7Zy_o",
  authDomain: "tummy-login.firebaseapp.com",
  projectId: "tummy-login",
  storageBucket: "tummy-login.firebasestorage.app",
  messagingSenderId: "809909698470",
  appId: "1:809909698470:web:24ba9e316710a4f4125967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);