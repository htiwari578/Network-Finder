import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_APIKEY,
  authDomain: "network-finder-40e02.firebaseapp.com",
  projectId: "network-finder-40e02",
  storageBucket: "network-finder-40e02.firebasestorage.app",
  messagingSenderId: "373987019039",
  appId: "1:373987019039:web:4a831e347c886f218a882a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}