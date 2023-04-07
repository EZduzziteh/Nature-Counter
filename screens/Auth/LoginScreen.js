import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import TextInput from '../../components/Input/TextInput';
import errors from './errors';
import * as userActions from '../../redux/actions/userActions';
import { Button, SocialLoginButton, LoginSignupCTA } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';
import WelcomeLogo from './WelcomeLogo';

GoogleSignin.configure({
  webClientId: '741177480474-6um6esqgrgg2fje8lhacfsrqt35eet3a.apps.googleusercontent.com',
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [eyeIcon, setEyeIcon] = useState(true);

  const emailSignin = async () => {
    setError(null);
    return auth().signInWithEmailAndPassword(email, password);
  };

  const googleSignin = async () => {
    const user = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const facebookSignin = async () => {
    LoginManager.logOut();

    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) throw new Error('User cancelled the login process');

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) throw new Error('Something went wrong obtaining access token');

    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    return auth().signInWithCredential(facebookCredential);
  };

  const addUser = uc => userActions.addUser(
    uc.user.displayName,
    uc.user.email,
    uc.user.uid,
  );

  const handleSignInError = err => {
    if (err.code in errors) setError(errors[err.code]);
    else console.error(err);
  };

  const handleLogin = () => emailSignin().then(addUser).catch(handleSignInError);
  const handleGoogleLogin = () => googleSignin().then(addUser).catch(handleSignInError);
  const handleFacebookLogin = () => facebookSignin().then(addUser).catch(handleSignInError);
  const handleAppleLogin = () => facebookSignin().then(addUser).catch(handleSignInError);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <WelcomeLogo text={'Welcome to \nNature Counter!'} width={260} large />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        passwordInput
        secureTextEntry={eyeIcon}
        eyeIcon={eyeIcon}
        onPress={() => setEyeIcon(!eyeIcon)}
      />

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('resetPassword')}>
          <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexGrow: 1 }} />

      <Button
        label="Login"
        onPress={email && password ? handleLogin : null}
        type={email && password ? 'green' : 'transparent'}
      />

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
        buttonLabel="Sign up"
        onPress={() => navigation.navigate('Register')}
      />

      <ErrorPrompt errorMsg={error} />

    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  forgotPasswordContainer: {
    marginBottom: 20,
    marginTop: 3,
  },
  forgotPasswordButton: {
    color: '#A4A9AE',
    fontSize: 13,
    marginHorizontal: 8,
    textAlign: 'right',
    fontWeight: '700',
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
