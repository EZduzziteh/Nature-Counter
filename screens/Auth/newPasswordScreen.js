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

const newPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState(null);
  const [eyeIcon, setEyeIcon] = useState(true);
  const [updated, setUpdated] = useState(true)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '741177480474-6um6esqgrgg2fje8lhacfsrqt35eet3a.apps.googleusercontent.com',
    });
    
  }, []);

  const handleNewPassword = async () => {
    if (!password || !verifyPassword) {
      return setError('Please enter a valid email address or password');
    }

    if (password !== verifyPassword) {
      return setError("Password and verify password do not match")
    } else {
      setUpdated(true)
  }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.shrink}>
      <View>
        <Image
          style={styles.loginLogo}
          source={require('../../assets/Frame26.png')}
        />
      </View>
      <Text style={styles.loginGreeting}>Welcome to Nature Counter!</Text>
      <View style={styles.bar} />
</View>
{!updated ? 
<Text style={styles.spacing}> Please type your new password</Text>
:
<Text style={styles.textline}> Your password has been updated!</Text>
}
{!updated && <TextInput
        passwordInput
        placeholder="New Password"
        value={password}
        secureTextEntry={eyeIcon}
        onChangeText={(pw) => setPassword(pw)}
        eyeIcon={eyeIcon}
        onPress={() => setEyeIcon(!eyeIcon)}
      />
}
{!updated && <TextInput
        passwordInput
        placeholder="Verify Password"
        value={verifyPassword}
        secureTextEntry={eyeIcon}
        onChangeText={(pw) => setVerifyPassword(pw)}
        eyeIcon={eyeIcon}
        onPress={() => setEyeIcon(!eyeIcon)}
      />
}
{updated && <Image
          style={styles.checkmark}
          source={require('../../assets/checkmark2.png')}
        />
}
{!updated && <LoginSignupCTA style={styles.button}
        promptLabel="Don’t have an account?"
        buttonLabel="Sign up"
        onPress={() => navigation.navigate('Register')}
      />}
      <Text> </Text>
{!updated ?
        <Button label="Submit" onPress={handleNewPassword} />
:
<Button label="Login" onPress={() => navigation.navigate('Login')} />
}
      {updated &&  <LoginSignupCTA style={styles.button}
        promptLabel="Don’t have an account?"
        buttonLabel="Sign up"
        onPress={() => navigation.navigate('Register')}
      />
}
      <ErrorPrompt errorMsg={error} />
    </KeyboardAvoidingView>
  );
};

export default newPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  shrink: {
    marginBottom: 37,
    marginTop: -70,
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
    marginBottom: 60,
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
    transform: [{scale: 0.6}],
    marginBottom: -40,
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
  button: {
    marginBottom: 50,
  },
  spacing: {
    marginBottom: 12
  },
  textline: {
    marginBottom: 12,
    textAlign: 'center',
  },
  checkmark: {
    color: 'rgba(36,191,156,1)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    maxWidth: 80,
    maxHeight: 80
  },
});