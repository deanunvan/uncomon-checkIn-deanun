// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNjjgvf5Mt4l-S7yGyG8aD5ednnjDFkzM",
  authDomain: "uncommon-check-in-system.firebaseapp.com",
  projectId: "uncommon-check-in-system",
  storageBucket: "uncommon-check-in-system.appspot.com",
  messagingSenderId: "241685040401",
  appId: "1:241685040401:web:7199be7a50acf723a5d0b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);