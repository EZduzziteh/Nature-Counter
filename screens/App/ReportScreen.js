import React from 'react';
import { ScrollView, Image } from 'react-native';
import AchievementsSection from '../../components/Section/AchievementsSection';
import BenefitsGainedSection from '../../components/Section/BenefitsGainedSection';
import LoggedSymptomsSection from '../../components/Section/LoggedSymptomsSection';
import TimeSpanTabs from '../../components/Selector/TimeSpanTabs';
import DurationHighlightsChart from '../../components/Charts/DurationHighlightsChart';
import ReportSharingSection from '../../components/Section/ReportSharingSection';
import Tips from '../../components/Section/Tips';

export default () => (

  

  
  <ScrollView >
    
    <AchievementsSection />
    <BenefitsGainedSection />
    <DurationHighlightsChart />
    <Tips />
    <Image style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}} source={require('../../assets/Frame26.png')}/> 
    <ReportSharingSection/>

  </ScrollView>
);


