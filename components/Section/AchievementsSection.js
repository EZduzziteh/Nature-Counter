import React from 'react';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import { Image, View } from 'react-native';
import { fifteenMinNature, fiftyMinNature, thirtyMinNature } from '../../assets/badges';
import styles from './styles';

const AchievementsSection = () => {
  return (
    <>
      <SectionHeaderRow title="Achievements" />
      <View style={styles.evenRow}>
        <Image style={styles.badge} source={fifteenMinNature} />
        <Image style={styles.badge} source={thirtyMinNature} />
        <Image style={styles.badge} source={fiftyMinNature} />
      </View>
    </>
  );
};

export default AchievementsSection;
