import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const LevelBadge = ({ children }) => {
  return (
    //Rendering view component to display the level badge
    <View style={styles.badgeContainer}>
      <View style={styles.circle}>
        <View style={styles.innerCircle}>
         <Image source={require('../../assets/icons/Level.png')}  />
          <Text style={styles.text}>{children}Level 1</Text>
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
    backgroundColor: '#000075',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 110,
    height: 110,
    borderColor: '#FEDE00',
    borderWidth: 4,
    borderRadius: 72,
    backgroundColor: '#000075',
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

  icon:{
    width:37
  },



});

export default LevelBadge;