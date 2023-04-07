import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

/**
 *
 * @param promptLabel
 * @param buttonLabel
 * @param onPress
 * @return {JSX.Element}
 * @constructor
 */
const LoginSignupCTA = ({ promptLabel, buttonLabel, onPress }) => (
  <View style={styles.signUpNowPromptContainer}>
    <Text style={styles.dontHaveAccountLabel}>{promptLabel}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.signUpNowButton}>{buttonLabel}</Text>
    </TouchableOpacity>
  </View>
);

export default LoginSignupCTA;
