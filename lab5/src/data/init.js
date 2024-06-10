// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDow2uIP3AU5eSTPj1vhlmgSOPa0dxPS1c",
  authDomain: "lab4-17280.firebaseapp.com",
  projectId: "lab4-17280",
  storageBucket: "lab4-17280.appspot.com",
  messagingSenderId: "573307846749",
  appId: "1:573307846749:web:128358c888109e8d2e8db4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);