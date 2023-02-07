import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 *
 * @param onPress
 * @param label
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({ onPress, label, type }) => {
  return (
    <TouchableOpacity
      style={
        type === 'white'
          ? styles.white
          : styles.button
      }
      onPress={onPress}
    >
      <Text
        style={
          type === 'white'
            ? styles.whiteLabel
            : styles.label
        }
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  label: '',
  type: '',
};

export default Button;
