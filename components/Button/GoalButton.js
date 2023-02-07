import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const GoalButton = ({ onPress, label, active }) => {
  return (
    <TouchableOpacity
      style={active ? styles.activeGoalButton : styles.inactiveGoalButton}
      onPress={onPress}
    >
      <Text
        style={ styles.label }
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

GoalButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  active: PropTypes.bool,
};

GoalButton.defaultProps = {
  onPress: () => {},
  label: '',
  active: false,
};

export default GoalButton;
