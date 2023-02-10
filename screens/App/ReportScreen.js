import React from 'react';
import { ScrollView } from 'react-native';
import AchievementsSection from '../../components/Section/AchievementsSection';
import BenefitsGainedSection from '../../components/Section/BenefitsGainedSection';
import LoggedSymptomsSection from '../../components/Section/LoggedSymptomsSection';
import OverviewSection from '../../components/Section/OverviewSection';
import TimeSpanTabs from '../../components/Selector/TimeSpanTabs';
import DurationHighlightsChart from '../../components/Charts/DurationHighlightsChart';

export default () => (
  <ScrollView>
    
    <OverviewSection />
    <LoggedSymptomsSection />
    <BenefitsGainedSection />
    <AchievementsSection />
    <DurationHighlightsChart />
  </ScrollView>
);
