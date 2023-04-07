import React, {usestate} from 'react';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import Badge from '../Badges/Badge';
import VisitsBadge from '../Badges/VisitsBadge';
import GoldBadge from '../Badges/GoldBadge';
import SilverBadge from '../Badges/SilverBadge';
import BronzeBadge from '../Badges/BronzeBadge';
import PlatinumBadge from '../Badges/PlatinumBadge';
import LevelBadge from '../Badges/LevelBadge';
import Trophy from '../../assets/icons/Trophy.svg';
import {
  Image,
  View,
  ScrollView,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import data from '../../SampleData/data.json';
import {useNavigation} from '@react-navigation/native';
import ShareIcon from '../../assets/icons/Share.svg';

const AchievementsSection = () => {
  //fetching data from json file
  const {mins} = data;
  const navigation = useNavigation();

  //rendering all badges and displaying award badges such as gold on the basis of minutes
  //fetching from json file in badge
  return (
    <>
      <View
        style={{flexDirection: 'row', justifyContent: 'flex-end', right: 25,}}>
        <ShareIcon
          width="30"
          height="30"
          onPress={() => navigation.navigate('ReportDownloadScreen')}
        />
      </View>
      <View style={[ styles.container,{ flexDirection: 'row',}, ]}>
    
      <Trophy></Trophy>
      <SectionHeaderRow title="Achievements" />
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.evenRow}>
          {/*<LevelBadge />*/}
          <Badge />
          <VisitsBadge />
          {mins === 120 ? <GoldBadge /> : null}
          {mins === 90 ? <SilverBadge /> : null}
          {mins === 60 ? <BronzeBadge /> : null}
          {mins === 30 ? <PlatinumBadge /> : null}
        </View>
      </ScrollView>
    </>
  );
};
export default AchievementsSection;
