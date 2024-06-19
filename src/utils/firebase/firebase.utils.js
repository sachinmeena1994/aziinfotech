import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, getFirestore, getDoc, setDoc} from 'firebase/firestore'

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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, "user", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        role: "user",
        createAt : new Date()
      });
    }
    catch(error){
      console.log(error, "error")
    }
  }
  
return userDocRef
}
