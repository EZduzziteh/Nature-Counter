import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

function WeekButtonGroup ({callback})  {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <View elevation = {5} style={{ flexDirection: 'row',
                    margin:5, 
                }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 0 ? '#299C40' : '#71E588',
          padding: 10,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderStyle:'solid',
          borderColor:'rgb(100, 100, 100)',
          borderWidth:1,
          alignItems: 'center',
        }}
        onPress={() => {setSelectedIndex(0); callback(0)} } //'Monday'
      >
        <Text>Weekly</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 1 ? '#299C40' : '#71E588',
          padding: 10,
          borderStyle:'solid',
          borderColor:'rgb(100, 100, 100)',
          borderWidth:1,
          alignItems: 'center',
        }}
        onPress={() => {setSelectedIndex(1); callback(1)}} //callback('May 1 - May 8')
      >
        <Text>Monthly</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 2 ? '#299C40' : '#71E588',
          padding: 10,
          
          borderStyle:'solid',
          borderColor:'rgb(100, 100, 100)',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          borderWidth:1,
          alignItems: 'center',
        }}
        onPress={() => {setSelectedIndex(2); callback(2)}}//callback('May')
      >
        <Text>Yearly</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeekButtonGroup;