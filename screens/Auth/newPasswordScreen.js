// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import errors from './errors';
import TextInput from '../../components/Input/TextInput';
import { Button } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';
import WelcomeLogo from './WelcomeLogo';
import PasswordValidation from '../../components/Utilities/PasswordValidation';

const newPasswordScreen = ({ navigation, route: { params: { oobCode } } }) => {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState(null);
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [verifyPasswordHidden, setVerifyPasswordHidden] = useState(true);
  const [updated, setUpdated] = useState(false);

  const handleNewPassword = async () => {
    setError(null);

    if (password !== verifyPassword) {
      return setError('Password and verify password do not match');
    }

    try {
      await auth().confirmPasswordReset(oobCode, password);
      setUpdated(true);
    } catch (err) {
      console.error(err);
      setError(errors[err.code]);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {updated ? (
        <>
          <WelcomeLogo text={'Your Password\nIs Now Updated'} width={260} large />
          <Text style={styles.textline}>
            You can log in to Nature Counter with your updated password.
          </Text>
          <View style={{ flexGrow: 1 }} />
          <Button label="Login" onPress={() => navigation.navigate('Login')} />
        </>
      ) : (
        <>
          <WelcomeLogo text="Password Reset" width={260} />
          <Text style={styles.spacing}>Please enter your new password</Text>
          <TextInput
            passwordInput
            placeholder="Password"
            value={password}
            secureTextEntry={passwordHidden}
            onChangeText={(pw) => setPassword(pw)}
            eyeIcon={passwordHidden}
            onPress={() => setPasswordHidden(!passwordHidden)}
          />
          <TextInput
            passwordInput
            placeholder="Verify Password"
            value={verifyPassword}
            secureTextEntry={verifyPasswordHidden}
            onChangeText={(pw) => setVerifyPassword(pw)}
            eyeIcon={verifyPasswordHidden}
            onPress={() => setVerifyPasswordHidden(!verifyPasswordHidden)}
          />
          <View style={styles.requirementContainer}>
            <PasswordValidation password={password} />
          </View>
          <View style={{ flexGrow: 1 }} />
          <View style={styles.submitButtonContainer}>
            <Button
              label="Reset"
              onPress={password && verifyPassword ? handleNewPassword : null}
              type={password && verifyPassword ? 'green' : 'transparent'}
            />
          </View>
        </>
      )}

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
    paddingTop: 80,
  },
  requirementContainer: {
    margin: 5,
  },
  spacing: {
    marginBottom: 12,
  },
  textline: {
    marginBottom: 12,
  },
  submitButtonContainer: {
    marginTop: 25,
  },
  checkmark: {
    color: 'rgba(36,191,156,1)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    maxWidth: 80,
    maxHeight: 80,
  },
});
