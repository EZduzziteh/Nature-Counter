import React from 'react';
import { ScrollView } from 'react-native';
import AchievementsSection from '../../components/Section/AchievementsSection';
import BenefitsGainedSection from '../../components/Section/BenefitsGainedSection';
import LoggedSymptomsSection from '../../components/Section/LoggedSymptomsSection';
import TimeSpanTabs from '../../components/Selector/TimeSpanTabs';
import DurationHighlightsChart from '../../components/Charts/DurationHighlightsChart';
import Tips from '../../components/Section/Tips';


export default () => (
  <ScrollView>
    
    <AchievementsSection />
    <BenefitsGainedSection />
    <LoggedSymptomsSection />
    <DurationHighlightsChart />
    <Tips />

  </ScrollView>
);
