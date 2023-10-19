// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBolMI6eyzTOTDS8awyX9MVc2OJu-L0wik",
    authDomain: "technovative-store-c3ad5.firebaseapp.com",
    projectId: "technovative-store-c3ad5",
    storageBucket: "technovative-store-c3ad5.appspot.com",
    messagingSenderId: "1024360229414",
    appId: "1:1024360229414:web:cd4e5462adce82d2bc14e7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;