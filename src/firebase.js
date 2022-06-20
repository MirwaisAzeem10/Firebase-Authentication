import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwc5IbzrDIIu0Y-R0I__QkXDOKQtuljG0",
  authDomain: "form-auth-2fba2.firebaseapp.com",
  projectId: "form-auth-2fba2",
  storageBucket: "form-auth-2fba2.appspot.com",
  messagingSenderId: "864181161709",
  appId: "1:864181161709:web:42dc75b07d13d60d3f86e4",
  measurementId: "G-PDW47GLTFH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
