import React, {UseState, useEffect, useState}  from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Data from '../../SampleData/Data1';


//This component will display various tips to the user and will pull them from a database 
//status: in progress
//
const Tips = () => {

  const data = Data;
  
  const [tipText, setTipText] = React.useState(data.tips[0]);

  return (
    <>
    <View style = {styles.tipsContainer}>

    <Text style = {styles.tipsContainer} >did you know...</Text>
    <Text style={styles.tipsText}></Text>
    </View>
    </>
  );
};

export default Tips;
