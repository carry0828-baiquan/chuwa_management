import firebase from "firebase/app";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC41a6qit6dw0qHuvomlqDE0srtaEC7LA",
  authDomain: "chuwa-management.firebaseapp.com",
  projectId: "chuwa-management",
  storageBucket: "chuwa-management.appspot.com",
  messagingSenderId: "559511364693",
  appId: "1:559511364693:web:963f700f88562951fde0dc",
  measurementId: "G-2LGK78D7PN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
