
//This component will display various tips to the user and will pull them from a database 
//status: in progress
//

import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Data from '../../SampleData/Data1';
import SectionHeaderRow from '../Row/SectionHeaderRow';

const Tips = () => {
  const data = Data;
  const [tipText, setTipText] = useState(data.tips[0].description);

  useEffect(() => {
    const interval = setInterval(() => {
      // get a random tip from the data
      const randomTipIndex = Math.floor(Math.random() * data.tips.length);
      setTipText(data.tips[randomTipIndex].description);
    }, 5000); // change the tip every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <View style={[ styles.container,{ flexDirection: 'row',}, ]}>
        <Image source={require('../../assets/icons/topAchievementsLogo.png')}></Image>
        <SectionHeaderRow title = "Tips"></SectionHeaderRow>
      </View>
      <View style={styles.tipsContainer}>
        <Text style ={styles.text}>Did You Know !!</Text>
        <Text style={styles.tipsText}>{tipText}</Text>
        <Image style = {styles.tipImage} source={require('../../assets/icons/tipsimage.png')}></Image>
      </View>
    </View>
  );
};

export default Tips;


