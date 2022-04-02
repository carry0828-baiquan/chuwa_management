
import { initializeApp } from "firebase/app";
import  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC41a6qit6dw0qHuvomlqDE0srtaEC7LA",
  authDomain: "chuwa-management.firebaseapp.com",
  projectId: "chuwa-management",
  storageBucket: "chuwa-management.appspot.com",
  messagingSenderId: "559511364693",
  appId: "1:559511364693:web:78f31a9125d977cbfde0dc",
  measurementId: "G-8LQRPLN7VX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app


