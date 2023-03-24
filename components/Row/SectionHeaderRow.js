import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { THEME_GREEN } from '../Utilities/Constants';
import { TextSize } from 'victory-native';
import styles from '../Section/styles';
const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
`;

const SectionLeft = styled.View`
  margin-left: 10px;
  flex-direction: row;
  font-size: 200px;
`;

const SectionRight = styled.View`
  margin-right: 10px;
`;

const SeeAll = styled.Text`
  color: ${THEME_GREEN};
`;

const SectionHeaderRow = ({ title, onPress  }) => (
  <SectionHeader>
    <SectionLeft>
      <Text style ={styles.SectionHeaderTitle}>{title}</Text>
    </SectionLeft>
    <SectionRight>
      <TouchableOpacity onPress={onPress}>
        {/*<SeeAll>See All</SeeAll>*/}
      </TouchableOpacity>
    </SectionRight>
  </SectionHeader>
);

export default SectionHeaderRow;
