import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import TextInput from '../../components/Input/TextInput';
import auth from '@react-native-firebase/auth';
import errors from './errors';
import * as userActions from '../../redux/actions/userActions';
import { Button, LoginSignupCTA } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [eyeIcon, setEyeIcon] = useState(true);
  const [confirmEyeIcon, setConfirmEyeIcon] = useState(true);

  const handleRegister = async () => {
    if (!validatePassword(password, confirmPassword)) {
      return setError('Your password does not match your confirm password');
    }
    if (!email) {
      return setError('Please enter a valid email address');
    }
    try {
      setError(null);
      const userCredentials =
        // auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
        await auth().createUserWithEmailAndPassword(email, password);

      await auth()
        .currentUser.updateProfile({
          displayName: name,
          uid: uid,
        })
        .then(() => {
          return userActions.addUser(
            auth().currentUser.displayName,
            auth().currentUser.email,
            auth().currentUser.uid,
          );
        });
      resetForm();
    } catch (err) {
      console.log('error', err);
      setError(errors[err.code]);
    }
  };

  const validatePassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.loginGreeting}>Sign up</Text>

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={em => setEmail(em)}
      />

      <TextInput
        passwordInput
        placeholder="Password"
        secureTextEntry={eyeIcon}
        value={password}
        onChangeText={pw => setPassword(pw)}
        eyeIcon={eyeIcon}
        onPress={() => setEyeIcon(!eyeIcon)}
      />

      <TextInput
        passwordInput
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry={confirmEyeIcon}
        onChangeText={name => setConfirmPassword(name)}
        eyeIcon={eyeIcon}
        onPress={() => setConfirmEyeIcon(!confirmEyeIcon)}
      />
      <View style={styles.submitButtonContainer}>
        <Button label="Submit" onPress={handleRegister} />
      </View>

      <LoginSignupCTA
        promptLabel="Already a Nature Counter member?"
        buttonLabel="Log in now"
        onPress={() => navigation.goBack()}
      />

      <ErrorPrompt errorMsg={error} />

    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  submitButtonContainer: {
    marginTop: 25,
  },
});
