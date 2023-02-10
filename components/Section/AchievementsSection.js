import React, { useState } from 'react';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import Badge from '../../components/Badge';
import { Image, View } from 'react-native';
import { fifteenMinNature, fiftyMinNature, thirtyMinNature } from '../../assets/badges';
import styles from './styles';

const AchievementsSection = () => {
  const [text, setText] = useState('');

  let image=<Image style={styles.badge} source={fifteenMinNature} />
  if (text === '15') {
    image = <Image style={styles.badge} source={fifteenMinNature} />;
  } else if (text === '30') {
    image = <Image style={styles.badge} source={thirtyMinNature} />;
  } else if (text === '50') {
    image = <Image style={styles.badge} source={fiftyMinNature} />;
  }
  return (
        
            <View style={styles.evenRow}>     
            <SectionHeaderRow title="Achievements" /> 
            
            <Image style ={image.style} source={image.source}></Image>
            <Badge setText={setText} />    

            <Image style={styles.badge} source={fifteenMinNature} />
        <Image style={styles.badge} source={thirtyMinNature} />
        <Image style={styles.badge} source={fiftyMinNature} />

            </View>      );
};
export default AchievementsSection;