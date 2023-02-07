import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const WeekButtonGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 0 ? '#24BF9C' : 'white',
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedIndex(0)}
      >
        <Text>Daily</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 1 ? '#24BF9C' : 'white',
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedIndex(1)}
      >
        <Text>Weekly</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 2 ? '#24BF9C' : 'white',
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedIndex(2)}
      >
        <Text>Monthly</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeekButtonGroup;