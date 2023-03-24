import React, {UseState, useEffect, useState}  from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Data from '../../SampleData/Data1';
import SectionHeaderRow from '../Row/SectionHeaderRow';


//This component will display various tips to the user and will pull them from a database 
//status: in progress
//
const Tips = () => {

  const data = Data;
  
  const [tipText, setTipText] = React.useState(data.tips[0]);

  return (
    <>
  <View style={[ styles.container,{ flexDirection: 'row',}, ]}>
<Image source={require('../../assets/icons/topAchievementsLogo.png')}></Image>
<SectionHeaderRow title = "Tips"></SectionHeaderRow>
</View>

    <View style = {styles.tipsContainer}>

    <Text style = {styles.tipsContainer} >did you know...</Text>
    <View style = {styles.tipsText}>
      <Text style={styles.tipsText}>A US study showed that in places that have more greenery and nature, residents reported a lowered level of depression symptoms.</Text>
    </View>
    </View>
    </>
  );
};

export default Tips;
