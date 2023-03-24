import React from 'react';
import { View } from 'react-native';
import ReportOverviewCard from '../Card/ReportOverviewCard';

import ReportPercentageCard from '../Card/ReportPercentageCard';
import styles from './styles';
const OverviewSection = (data) => {
  return (
    <View style={styles.overviewContainer}>
      <ReportPercentageCard title = "percent of goal achieved" percentage = {Math.round(data.currentInMinutes/data.goalInMinutes*100)} />
      <ReportOverviewCard title="Total Duration" primary={data.currentInMinutes} secondary={data.goalInMinutes} /> 
    </View>
  );
};

export default OverviewSection;
