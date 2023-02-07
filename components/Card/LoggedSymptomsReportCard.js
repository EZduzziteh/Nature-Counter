import { View, Text } from 'react-native';
import React from 'react';
import {
  GAIN_ENERGY_ACTIVE,
  LOWER_STRESS_ACTIVE,
  MIND_ACTIVE,
  POSITIVITY_ACTIVE
} from '../../assets/icons';
import { Benefit } from '../ListItem/BenefitListItem';
import DaysLabel from '../Label/DaysLabel';
import styles from './styles';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
const LoggedSymptomsReportCard = () => {
  return (
    <View style={styles.overviewCard}>
      <View>
        <Benefit label="Stress" source={LOWER_STRESS_ACTIVE} />
        <Text style={styles.intensity}>High</Text>
        <DaysLabel num={5} />
      </View>
      <View>
        <Benefit label="Stress" source={GAIN_ENERGY_ACTIVE} />
        <Text style={styles.intensity}>Low</Text>
        <DaysLabel num={4} />
      </View>
      <View>
        <Benefit label="Stress" source={MIND_ACTIVE} />
        <Text style={styles.intensity}>Mid</Text>
        <DaysLabel num={4} />
      </View>
      <View>
        <Benefit label="Stress" source={POSITIVITY_ACTIVE} />
        <Text style={styles.intensity}>High</Text>
        <DaysLabel num={3} />
      </View>
    </View>
  );
};

export default LoggedSymptomsReportCard;
