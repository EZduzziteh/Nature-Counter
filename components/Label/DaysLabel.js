import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME_GREEN } from '../Utilities/Constants';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(244, 252, 250, 1)',
  },
  text: {
    fontWeight: 'bold',
    color: THEME_GREEN,
    textAlign: 'center',
    paddingVertical: 6,
  },
});

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
const DaysLabel = ({ num }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {num}
        {' '}
        days
      </Text>
    </View>
  );
};

export default DaysLabel;

DaysLabel.defaultProps = {
  num: 0,
};

DaysLabel.defaultProps = {
  num: PropTypes.number,
};
