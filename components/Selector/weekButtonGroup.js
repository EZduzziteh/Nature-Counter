import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

function WeekButtonGroup ({callback})  {
  //this si the index for the week selector mode, 0 = daily, 1 = monthly, 2 = annual
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <View elevation = {5} style={{ flexDirection: 'row',
                    margin:16, 
                }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedIndex === 0 ? '#299C40' : '#71E588',
          padding: 10,
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 100,
          borderStyle:'solid',
          borderColor:'rgb(100, 100, 100)',
          borderWidth:1,
          alignItems: 'center',
        }}
        onPress={() => {setSelectedIndex(0); callback(0)} } //sends the callback with data  for daily mode back to durationhighlightschart
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
        onPress={() => {setSelectedIndex(1); callback(1)}}//sends the callback with data  for weekly mode back to durationhighlightschart
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
          borderBottomRightRadius: 100,
          borderTopRightRadius: 100,
          borderWidth:1,
          alignItems: 'center',
        }}
        onPress={() => {setSelectedIndex(2); callback(2)}} //sends the callback with data  for annual mode back to durationhighlightschart
      >
        <Text>Yearly</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeekButtonGroup;