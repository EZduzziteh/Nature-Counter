import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

const Badge = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.badgeContainer}>  
     
        <View style={styles.circle}>        
        <TextInput  style={styles.input} onChangeText={(value) => setText(value)}/>  
          <Text style={styles.text}>{text}Minutes</Text>      
        </View>    
    </View>  
    );
};
const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 1,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#5A5A5A',
    borderColor: '#24BF9C',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  },
});
export default Badge;