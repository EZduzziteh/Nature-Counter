import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import data from '../../SampleData/data.json';

const VisitsBadge = ({ children }) => {
  //fetching data from json file
  const {visits} = data; 

  return (
    //Rendering view component to display the visits badge and displaying no of visits inside text component
    <View style={styles.badgeContainer}>
      <View style={styles.circle}>
        <View style={styles.innerCircle}>
          <Image source={require('../../assets/icons/Calender.png')}/>  
          <Text style={styles.text}>{children}{visits}</Text>
          <Text style={styles.text1}>{children}VISITS</Text>
          <Image source={require('../../assets/icons/Stars.png')} style={styles.icon}/>  
        </View>
      </View>
    </View>
  );
};

//Style
const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#0E4C92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 110,
    height: 110,
    borderColor: '#FEDE00',
    borderWidth: 4,
    borderRadius: 72,
    backgroundColor: '#0E4C92',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  },

  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  },

  icon:{
    width:37
  }

});

export default VisitsBadge;
