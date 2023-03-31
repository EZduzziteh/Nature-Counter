import React from 'react';
import { ScrollView, Image, Button, View, StyleSheet  } from 'react-native';
import AchievementsSection from '../../components/Section/AchievementsSection';
import BenefitsGainedSection from '../../components/Section/BenefitsGainedSection';
import LoggedSymptomsSection from '../../components/Section/LoggedSymptomsSection';
import TimeSpanTabs from '../../components/Selector/TimeSpanTabs';
import DurationHighlightsChart from '../../components/Charts/DurationHighlightsChart';
import ReportSharingSection from '../../components/Section/ReportSharingSection';
import Tips from '../../components/Section/Tips';
import styles from '../../components/Section/styles';
export default () => (

  <ScrollView style = {styles.Reports}>
    <AchievementsSection />
    <BenefitsGainedSection />
    <DurationHighlightsChart />
    <Tips />
    {/* <Image style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}} source={require('../../assets/Frame26.png')}/>  */}

  </ScrollView>
);


