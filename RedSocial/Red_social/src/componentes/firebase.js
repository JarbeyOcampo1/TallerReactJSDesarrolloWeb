// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_WroEKy9pEuf20NdyqWHklezXNApYIJs",
  authDomain: "redsocial-5de57.firebaseapp.com",
  projectId: "redsocial-5de57",
  storageBucket: "redsocial-5de57.firebasestorage.app",
  messagingSenderId: "256354072253",
  appId: "1:256354072253:web:000c7652b188920e63e9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);