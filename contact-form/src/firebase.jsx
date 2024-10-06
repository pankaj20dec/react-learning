// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfLNIPalvc1eJPLba_OAZX_Bpi8uiUNgo",
  authDomain: "contact-form-62a0f.firebaseapp.com",
  databaseURL: "https://contact-form-62a0f-default-rtdb.firebaseio.com",
  projectId: "contact-form-62a0f",
  storageBucket: "contact-form-62a0f.appspot.com",
  messagingSenderId: "821704137447",
  appId: "1:821704137447:web:877425b0a9770b578ce042",
  measurementId: "G-RY1PPCLT4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database, ref, set };