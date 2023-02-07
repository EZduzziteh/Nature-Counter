import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  tabs: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
  },
});

const TimeSpanTabs = () => {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity>
        <Text style={styles.tabLabel}>Daily</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.tabLabel}>Weekly</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.tabLabel}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeSpanTabs;
