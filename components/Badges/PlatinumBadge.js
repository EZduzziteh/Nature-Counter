import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const PlatinumBadge = ({ children }) => {
  return (
    <View style={styles.badgeContainer}>
      <View style={styles.circle}>
        <Image source={require('../../assets/icons/Platinum.png')} style={styles.icon}  />
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#FFD700', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon:{
    width: 120,
    height: 120,
  }
  
  
});

export default PlatinumBadge;