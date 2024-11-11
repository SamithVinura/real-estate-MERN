// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-41ff7.firebaseapp.com",
  projectId: "real-estate-mern-41ff7",
  storageBucket: "real-estate-mern-41ff7.firebasestorage.app",
  messagingSenderId: "320423460655",
  appId: "1:320423460655:web:141612aef5fffcbb1cebda",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
