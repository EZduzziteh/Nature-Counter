// @ts-ignore
import React, { useState, useEffect } from 'react';
// @ts-ignore
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import TextInput from '../../components/Input/TextInput';
import auth, {
  FacebookAuthProvider,
  GoogleAuthProvider,
  AppleAuthpProvider,
} from '@react-native-firebase/auth';
import errors from './errors';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import * as userActions from '../../redux/actions/userActions';
import { Button, SocialLoginButton, LoginSignupCTA } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const resetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '741177480474-6um6esqgrgg2fje8lhacfsrqt35eet3a.apps.googleusercontent.com',
    });
  }, []);

  const facebookSignin = async () => {
    await LoginManager.logOut();
    /* Login with permissions */
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    /* Once signed in, get the users AccesToken */
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    /* Create a Firebase credential with the AccessToken */
    const facebookCredential = FacebookAuthProvider.credential(
      data.accessToken,
    );
    /* Sign-in the user with the credential */
    return auth().signInWithCredential(facebookCredential);
  };

  const googleSignin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log('this was the google sign in error', err);
    }
  };

  const actionCodeSettings = {
    handleCodeInApp: false,
    url: 'https://naturecounter.page.link/Login',
    iOS: {
      bundleId: 'org.naturecounter',
    },
    android: {
      packageName: 'com.naturecounter',
    },
    dynamicLinkDomain: 'naturecounter.page.link',
  };

  const handleGoogleLogin = () => {
    googleSignin()
      .then(res => console.log('user is signed in', res))
      .then(() => {
        return userActions.addUser(
          auth().currentUser.displayName,
          auth().currentUser.email,
          auth().currentUser.uid,
        );
      });
  };

  const handleFacebookLogin = () => {
    facebookSignin()
      .then(res => console.log('user is signed in', res))
      .then(() => {
        return userActions.addUser(
          auth().currentUser.displayName,
          auth().currentUser.email,
          auth().currentUser.uid,
        );
      });
  };

  const handleAppleLogin = () => {
   console.log("TODO")
  };

  const handlePasswordReset = async (e) => {
    if (!email) {
      return setError('Please enter a valid email address');
    }
    try {
      const res = await auth().sendPasswordResetEmail(
        email,
        actionCodeSettings,
      );
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        return setError('Please enter a valid email address');
      }
    }
    setError('Reset password email sent');
  };

  useEffect(() => {
    const backlink = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      backlink;
    };
  }, []);
  const handleDynamicLink = async (link) => {
    navigation.navigate('newPassword')
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          style={styles.loginLogo}
          source={require('../../assets/Frame26.png')}
        />
      </View>
      <Text style={styles.loginGreeting}>Welcome to Nature Counter!</Text>
      <View style={styles.bar} />
      <Text style={styles.spacing}>
        Enter your email address below to 
        <Text style={styles.bold}> reset password </Text>
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(em) => setEmail(em)}
      />
{error && <ErrorPrompt errorMsg={error} /> }
<LoginSignupCTA
        promptLabel="Don’t have an account?"
        buttonLabel="Sign up"
        onPress={() => navigation.navigate('Register')}
      />
      <Text></Text>
      <Text></Text>
      <Button label="Reset" onPress={handlePasswordReset} />
      <View style={styles.socialLoginContainer}>
        <SocialLoginButton
          login="google"
          onPress={handleGoogleLogin}
        />
        <SocialLoginButton
          login="facebook"
          onPress={handleFacebookLogin}
        />
        <SocialLoginButton
          login="apple"
          onPress={handleAppleLogin}
        />
      </View>
      <LoginSignupCTA
        promptLabel="Don’t have an account?"
        buttonLabel="Sign up now"
        onPress={() => navigation.navigate('Register')}
      />
    </KeyboardAvoidingView>
  );
};

export default resetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  spacing: {
    textAlign: 'center',
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold'
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signUpNowPromptContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 12,
  },
  signUpNowButton: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  forgotPasswordButton: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 13,
    marginHorizontal: 8,
    textAlign: 'right',
  },
  dontHaveAccountLabel: {
    color: 'rgba(0,0,0,0.5)',
    marginRight: 10,
  },
  loginLogo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginGreeting: {
    marginTop: 40,
    marginBottom: 70,
    fontSize: 34,
    fontWeight: 'bold',
    width: 275,
    lineHeight: 40,
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
  },
  bar: {
    marginTop: -85,
    backgroundColor: 'rgba(36,191,156,0.2)',
    height: 17,
    width: 269,
    alignSelf: 'center',
  },
  form: {
    marginHorizontal: 38,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    alignItems: 'center',
  },
});

