import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const OutlineButton = ({ onPress, label }) => (
  <TouchableOpacity
    style={styles.outlineButtonContainer}
    onPress={onPress}
  >
    <Text style={styles.outlineButtonLabel}>{label}</Text>
  </TouchableOpacity>
);

OutlineButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};

OutlineButton.defaultProps = {
  onPress: () => {},
  label: '',
};

export default OutlineButton;
