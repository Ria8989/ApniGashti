import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      GoogleSignin.configure({
        webClientId:
        '560932385482-sen2tm3gse8c5vqtsgt3v40likeaf1cp.apps.googleusercontent.com',
      });
    }, []);
  
    async function onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
  
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
  
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  
    if (authenticated) {
      return <Authenticated />;
    }
  
    return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
  }