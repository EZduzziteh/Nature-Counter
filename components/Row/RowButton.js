import {
  Text, TouchableOpacity, View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { BLACK } from '../Utilities/Constants';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Row that accepts icon,label, and onPress
 * @param label
 * @param icon
 * @param onPress
 * @return {JSX.Element}
 * @constructor
 */
const RowButton = ({ label, icon, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.leftSide}>
      <Icon name={icon} type="material-community" color={BLACK} size={32} />
      <Text style={styles.rowButtonText}>{label}</Text>
    </View>
    <Icon name="chevron-right" type="material-community" color={BLACK} size={32} />
  </TouchableOpacity>
);

RowButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

RowButton.defaultProps = {
  label: '',
  icon: '',
  onPress: () => {},
};

export default RowButton;
