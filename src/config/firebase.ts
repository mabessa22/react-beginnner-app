// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhWC0I_xpcn4gSO7Frfn0kB-keiMQIjA",
  authDomain: "react-first-app-f4890.firebaseapp.com",
  projectId: "react-first-app-f4890",
  storageBucket: "react-first-app-f4890.appspot.com",
  messagingSenderId: "1094034062461",
  appId: "1:1094034062461:web:3e4b4733a7481a0e958514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);