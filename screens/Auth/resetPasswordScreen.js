// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Modal from '../../components/Utilities/Modal';
import TextInput from '../../components/Input/TextInput';
import { Button, LoginSignupCTA } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';
import WelcomeLogo from './WelcomeLogo';
import { DARK_GREY } from '../../components/Utilities/Constants';
import KeySVG from '../../assets/icons/key.svg';

const resetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const actionCodeSettings = {
    handleCodeInApp: true,
    url: 'https://naturecounter.page.link/reset',
    iOS: { bundleId: 'org.naturecounter' },
    android: { packageName: 'com.naturecounter' },
  };

  const handlePasswordReset = async () => {
    if (!email) {
      return setError('Please enter a valid email address');
    }

    try {
      await auth().sendPasswordResetEmail(email, actionCodeSettings);
      setSent(true);
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        return setError('Please enter a valid email address');
      }

      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal active={sent} setActive={setSent} autoHeight>
        <View style={styles.modalContainer}>
          <View style={styles.keyWrapper}>
            <KeySVG style={styles.key} width="40" height="40" />
          </View>
          <Text style={styles.modalBold}>Reset Password Request Has Been Submitted</Text>
          <Text style={styles.modalText}>
            You will receive a confirmation email to reset your password.
          </Text>
          <Button
            label="Got It"
            onPress={() => setSent(false)}
            type="green"
            size="small"
            style={{ alignSelf: 'flex-end' }}
          />
        </View>
      </Modal>
      <Text style={styles.cancel} onPress={() => navigation.goBack()}>Cancel</Text>

      <WelcomeLogo text="Password Reset" width={260} />

      <Text style={styles.resetText}>
        Enter your email address below to submit a
        <Text style={styles.bold}> password reset </Text>
        request.
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(em) => setEmail(em)}
      />
      <View style={{ flexGrow: 1, height: 40 }} />
      {error && <ErrorPrompt errorMsg={error} /> }

      <Button
        label="Submit"
        onPress={email ? handlePasswordReset : null}
        type={email ? 'green' : 'transparent'}
      />

      <LoginSignupCTA
        promptLabel="Don’t have an account?"
        buttonLabel="Sign up"
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
    paddingVertical: 40,
  },
  cancel: {
    textAlign: 'right',
    color: DARK_GREY,
    fontSize: 16,
    marginBottom: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
  keyWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F1FAF3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 16,
  },
  modalBold: {
    fontWeight: '700',
    fontSize: 21,
  },
  modalContainer: {
    paddingHorizontal: 12,
  },
  modalText: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 15,
  },
  resetText: {
    fontSize: 16,
    marginVertical: 10,
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
