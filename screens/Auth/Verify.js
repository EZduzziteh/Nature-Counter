import React, { useState } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import * as userActions from '../../redux/actions/userActions';
import styles from '../../components/Utilities/loginStyles';
import { Button } from '../../components/Button';
import ErrorPrompt from '../../components/Label/ErrorPrompt';

const Verify = (props) => {
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const userSubmittedEmail = auth().currentUser.email;

  const actionCodeSettings = {
    handleCodeInApp: false,
    url: 'https://naturecounter.page.link/email-verification',
    iOS: {
      bundleId: 'org.naturecounter',
    },
    android: {
      packageName: 'com.naturecounter',
    },
    dynamicLinkDomain: 'naturecounter.page.link',
  };

  const handleEmailVerification = async () => {
    if (!disabled) {
      setMessage('Email verification has been sent!');
      setDisabled(true);

      try {
        const res = await auth()
          .currentUser.sendEmailVerification(actionCodeSettings)
          .then(() => {
            return userActions.addUser(
              auth().currentUser.displayName,
              auth().currentUser.email,
              auth().currentUser.uid,
            );
          });
      } catch (err) {
        setMessage(err);
        console.log('Error: ', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginGreeting}>Verify Email</Text>
      <View style={{marginHorizontal: 70, marginTop: 30, marginBottom: 30}}>
        <Text>We've sent a verification email to {userSubmittedEmail}.</Text>
        <Text style={{marginTop: 30}}>Please check your inbox.</Text>
      </View>
      <Button onPress={handleEmailVerification} label="Resend Email" />
      <ErrorPrompt errorMsg={message} />
    </View>
  );
};

export default Verify;
