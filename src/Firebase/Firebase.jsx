// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9YA4XPhGD55Rpr09fW9RCCeOl9wbn4AI",
  authDomain: "aziinfotech-cf5c0.firebaseapp.com",
  projectId: "aziinfotech-cf5c0",
  storageBucket: "aziinfotech-cf5c0.appspot.com",
  messagingSenderId: "786100443919",
  appId: "1:786100443919:web:d09767a019363f5e593c7a",
  measurementId: "G-Q46XTQXJ1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);