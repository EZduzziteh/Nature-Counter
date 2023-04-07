import React, { useState } from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import styled from 'styled-components/native';
import Modal from '../../components/Utilities/Modal';
import TextInput from '../../components/Input/TextInput';
import errors from './errors';
import * as userActions from '../../redux/actions/userActions';
import { Button, LoginSignupCTA } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';
import WelcomeLogo from './WelcomeLogo';
import PasswordValidation from '../../components/Utilities/PasswordValidation';
import { THEME_GREEN } from '../../components/Utilities/Constants';

import privacyPolicy from '../../public/text/privacyPolicy';
import termsOfUse from '../../public/text/termsOfUse';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState(null);
  const [eyeIcon, setEyeIcon] = useState(true);
  const [confirmEyeIcon, setConfirmEyeIcon] = useState(true);

  const [modalActive, setModalActive] = useState(false);
  const [modalPage, setModalPage] = useState(0);

  const handleRegister = async () => {
    setError(null);

    if (password !== confirmPassword) {
      return setError('Your password does not match your confirm password');
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: name });
      await userActions.addUser(
        auth().currentUser.displayName,
        auth().currentUser.email,
        auth().currentUser.uid,
      );

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.log('error', err);
      setError(errors[err.code]);
    }
  };

  const terms = [
    ['Privacy Policy', privacyPolicy],
    ['Terms of Use ("Terms")', termsOfUse],
  ];

  const showTerms = () => {
    setModalActive(true);
    setModalPage(0);
  };

  const GreenText = styled.Text`
    color: ${THEME_GREEN};
  `;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal title={terms[modalPage][0]} active={modalActive} setActive={setModalActive}>
        <ScrollView style={styles.modalContentWrapper} persistentScrollbar>
          <Text style={styles.modalContent}>{terms[modalPage][1]}</Text>
        </ScrollView>
        <View style={styles.modalButtons}>
          {modalPage !== 0 && (
          <Button
            label="Back"
            onPress={() => setModalPage(modalPage - 1)}
            type="white"
            size="small"
          />
          )}
          <Button
            label={modalPage === terms.length - 1 ? 'Close' : 'Next'}
            onPress={modalPage === terms.length - 1
              ? () => setModalActive(false)
              : () => setModalPage(modalPage + 1)}
            type="green"
            size="small"
          />
        </View>
      </Modal>
      <WelcomeLogo text="Sign Up" width={126} />

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        passwordInput
        placeholder="Password"
        secureTextEntry={eyeIcon}
        value={password}
        onChangeText={setPassword}
        eyeIcon={eyeIcon}
        onPress={() => setEyeIcon(!eyeIcon)}
      />

      <TextInput
        passwordInput
        placeholder="Verify Password"
        value={confirmPassword}
        secureTextEntry={confirmEyeIcon}
        onChangeText={setConfirmPassword}
        eyeIcon={eyeIcon}
        onPress={() => setConfirmEyeIcon(!confirmEyeIcon)}
      />

      <View style={styles.requirementContainer}>
        <PasswordValidation password={password} />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={consent}
          onValueChange={setConsent}
          tintColors={{ true: THEME_GREEN }}
        />
        <TouchableOpacity onPress={() => setConsent(!consent)} style={styles.consentText}>
          <Text>
            I agree to Nature Counter’s
            <GreenText onPress={showTerms}> Terms and Conditions</GreenText>
          </Text>
        </TouchableOpacity>
      </View>

      <ErrorPrompt errorMsg={error} />

      <View style={styles.submitButtonContainer}>
        <Button
          label="Sign Up"
          onPress={name && email && password && confirmPassword && consent ? handleRegister : null}
          type={name && email && password && confirmPassword && consent ? 'green' : 'transparent'}
        />
      </View>

      <LoginSignupCTA
        promptLabel="Already have an account?"
        buttonLabel="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  requirementContainer: {
    margin: 5,
  },
  submitButtonContainer: {
    marginTop: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  modalContentWrapper: {
    marginVertical: 16,
    paddingRight: 6,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
