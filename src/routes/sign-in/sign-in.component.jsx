import { useState, useContext } from 'react';
import { UserContext } from '../../components/contexts/user.context';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const {currentUser,setCurrentUser} = useContext(UserContext)
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
    setCurrentUser(user)
    console.log(currentUser)
    
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
