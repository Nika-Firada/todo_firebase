// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkEQTCvgNZ5ksApVDu_85vHdD2yGdi5Sc",
  authDomain: "todo-app-d0999.firebaseapp.com",
  projectId: "todo-app-d0999",
  storageBucket: "todo-app-d0999.appspot.com",
  messagingSenderId: "360633131974",
  appId: "1:360633131974:web:3b4343020c9481177188c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);