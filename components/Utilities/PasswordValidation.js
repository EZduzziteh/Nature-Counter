import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { THEME_GREEN } from './Constants';

const ConditionalText = ({ text, condition }) => (
  <Text style={[styles.text, condition ? styles.success : styles.failure]}>
    { `• ${text}` }
  </Text>
);

const PasswordValidation = ({ password }) => (
  <>
    <ConditionalText text="A minimum of 8 characters" condition={password.length >= 8} />
    <ConditionalText text="At least 1 uppercase letter" condition={password.match(/[A-Z]/)} />
    <ConditionalText text="At least 1 lowercase letter" condition={password.match(/[a-z]/)} />
    <ConditionalText text="At least 1 number and 1 symbol" condition={password.match(/\d/) && password.match(/[^\w]|_/)} />
  </>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  success: {
    color: THEME_GREEN,
  },
  failure: {
    color: '#707070',
  },
});

export default PasswordValidation;
