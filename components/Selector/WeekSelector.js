import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { MEDIUM_GREY } from '../Utilities/Constants';

const styles = StyleSheet.create({
  weekSelector: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrowContainer: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderColor: MEDIUM_GREY,
  },
});

function WeekSelector  (dateInterval)  {
  return (
    <View style={styles.weekSelector}>
      
      <Text>{dateInterval.dateInterval}</Text>
    
    </View>
  );
};

/*<TouchableOpacity>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-left" type="material-community" />
        </View>
      </TouchableOpacity>  <TouchableOpacity>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-right" type="material-community" />
        </View>
      </TouchableOpacity> */

export default WeekSelector;
