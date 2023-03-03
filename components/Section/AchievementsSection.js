import React, {usestate }from 'react';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import Badge from '../Badges/Badge';
import VisitsBadge  from '../Badges/VisitsBadge';
import GoldBadge from '../Badges/GoldBadge';
import SilverBadge from '../Badges/SilverBadge';
import BronzeBadge from '../Badges/BronzeBadge';
import PlatinumBadge from '../Badges/PlatinumBadge';
import LevelBadge from '../Badges/LevelBadge';
import { Image, View, ScrollView, Text } from 'react-native';
import styles from './styles';
import data from '../../SampleData/data.json';

const AchievementsSection = () => {
  //fetching data from json file
  const { mins } = data;

  //rendering all badges and displaying award badges such as gold on the basis of minutes 
  //fetching from json file in badge
  return (
    <>

<SectionHeaderRow title="Achievements" />
    <ScrollView horizontal={true}>
    <View style={styles.evenRow}>
    <LevelBadge />
    <Badge />
    <VisitsBadge />
          {mins === 120 ? <GoldBadge /> : null}
          {mins === 90 ? <SilverBadge /> : null}
          {mins === 60 ? <BronzeBadge /> : null}
          {mins === 30 ? <PlatinumBadge /> : null}
        </View>
        </ScrollView>  
    
        
   
    </>  );
};
export default AchievementsSection;