// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCrYmRkEqqQQCGFBT59vNYE9-e3qFGzXGg",
    authDomain: "proyecto-lenceria-react-4991.firebaseapp.com",
    projectId: "proyecto-lenceria-react-4991",
    storageBucket: "proyecto-lenceria-react-4991.appspot.com",
    messagingSenderId: "431229931585",
    appId: "1:431229931585:web:121f7e05e80f67eb62f6c0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
