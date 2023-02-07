import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 *
 * @param onPress
 * @param login
 * @return {JSX.Element}
 * @constructor
 */
const SocialLoginButton = ({ onPress, login }) => {
  function renderLoginImg() {
    if (login === 'google') {
      return require('../../assets/GoogleIcon.png');
    } else if (login === 'facebook') {
      return require('../../assets/facebookIcon.png');
    } else if (login === 'apple') {
      return require('../../assets/appleIcon.png');
    }
  }

  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <Image source={renderLoginImg()} style={styles.img} />
    </TouchableOpacity>
  );
};

export default SocialLoginButton;