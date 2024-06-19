import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9YA4XPhGD55Rpr09fW9RCCeOl9wbn4AI",
  authDomain: "aziinfotech-cf5c0.firebaseapp.com",
  projectId: "aziinfotech-cf5c0",
  storageBucket: "aziinfotech-cf5c0.appspot.com",
  messagingSenderId: "786100443919",
  appId: "1:786100443919:web:d09767a019363f5e593c7a",
  measurementId: "G-Q46XTQXJ1D"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
