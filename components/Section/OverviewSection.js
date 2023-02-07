import React from 'react';
import { View } from 'react-native';
import ReportOverviewCard from '../Card/ReportOverviewCard';
import styles from './styles';

const OverviewSection = () => {
  return (
    <View style={styles.overviewContainer}>
      <ReportOverviewCard title="Days in Nature" primary="3" secondary="7" />
      <ReportOverviewCard title="Minutes in Nature" primary="103" secondary="120" />
    </View>
  );
};

export default OverviewSection;
