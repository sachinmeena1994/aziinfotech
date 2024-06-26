
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,signOutUser
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user) 
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signOutUser}>Sign out</button>
    </div>
  );
};

export default SignIn;
