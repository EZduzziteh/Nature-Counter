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
const LoginSignupCTA = ({ promptLabel, buttonLabel, onPress }) => {
  return (
    <View style={styles.signUpNowPromptContainer}>
      <Text style={styles.dontHaveAccountLabel}>{promptLabel}</Text>
      <TouchableOpacity style={styles.signUpNowButton} onPress={onPress}>
        <Text>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginSignupCTA;
