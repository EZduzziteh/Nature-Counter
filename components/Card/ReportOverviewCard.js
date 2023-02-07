import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

const ReportOverviewCard = ({ title, primary, secondary }) => (
  <View style={styles.overViewCard}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.stats}>
      <Text style={styles.primary}>{primary}</Text>
      <Text style={styles.secondary}>
        /
        {secondary}
      </Text>
    </View>
  </View>
);

export default ReportOverviewCard;
