import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * @param onPress
 * @param label
 * @param {'white'|'green'|'transparent'} type
 * @param {'large'|'small'} size
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({
  onPress, label, type, size, style = {},
}) => (
  <TouchableOpacity
    style={[styles.button, styles[type], styles[size], style]}
    onPress={onPress}
  >
    <Text
      style={[styles.label, styles[`${type}Label`]]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  label: '',
  type: 'green',
  size: 'large',
};

export default Button;
