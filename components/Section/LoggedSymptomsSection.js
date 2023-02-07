import React from 'react';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import LoggedSymptomsReportCard from '../Card/LoggedSymptomsReportCard';
import { View } from 'react-native';

const LoggedSymptomsSection = () => {
  return (
    <View>
      <SectionHeaderRow title="Logged Symptoms" />
      <LoggedSymptomsReportCard />
    </View>
  );
};

export default LoggedSymptomsSection;
