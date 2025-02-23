// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4FWR5tXrcb4WstjIp-q1UzgOq1_l3QkU",
  authDomain: "reverse-thief.firebaseapp.com",
  projectId: "reverse-thief",
  storageBucket: "reverse-thief.firebasestorage.app",
  messagingSenderId: "670816515820",
  appId: "1:670816515820:web:9e74e926b514f8795797c9",
  measurementId: "G-P5V2XJ2KVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;