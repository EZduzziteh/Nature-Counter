import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { MEDIUM_GREY } from '../Utilities/Constants';

const styles = StyleSheet.create({
  weekSelector: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrowContainer: {
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: MEDIUM_GREY,
  },
});

const WeekSelector = () => {
  return (
    <View style={styles.weekSelector}>
      <TouchableOpacity>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-left" type="material-community" />
        </View>
      </TouchableOpacity>
      <Text>May 20 - May 26</Text>
      <TouchableOpacity>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-right" type="material-community" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WeekSelector;
