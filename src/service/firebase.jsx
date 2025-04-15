// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXhI7iPsITldM_DVOTC6FVyTB87lcPXag",
  authDomain: "react-cafe-7f242.firebaseapp.com",
  projectId: "react-cafe-7f242",
  storageBucket: "react-cafe-7f242.firebasestorage.app",
  messagingSenderId: "60839875380",
  appId: "1:60839875380:web:899c1d6166fccfbe428b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)