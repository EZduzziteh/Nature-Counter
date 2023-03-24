import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import {
  MEMORY_ACTIVE,
} from '../../assets/icons';
import { Benefit } from '../ListItem/BenefitListItem';

const ReportPercentageCard = ({ percentage }) => (
  <View style={styles.overViewCard}>
   
    <View style={styles.stats}>
      
      <Image source = {require("../../assets/icons/clockicon.png")}></Image>
      <Text style = {styles.percentageText}>{percentage+ '%'}</Text>
      
    </View>
  </View>
);

export default ReportPercentageCard;
