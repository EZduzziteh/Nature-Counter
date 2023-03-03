import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const BronzeBadge = ({ children }) => {
  return (
    //Rendering view component to display the bronze badge
      <View style={styles.badgeContainer}>
        <View style={styles.circle}>
          <Image source={require('../../assets/icons/Bronze.png')} style={styles.icon}  />
          </View>
        </View>
      
    );
  };
  
  //Style for the bronze badge 
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

export default BronzeBadge;