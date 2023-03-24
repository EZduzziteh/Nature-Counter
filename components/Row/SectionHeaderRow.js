import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { THEME_GREEN } from '../Utilities/Constants';
import { LESS_DEPRESSION_INACTIVE } from '../../assets/icons';
const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
`;

const SectionLeft = styled.View`
  margin-left: 10px;
  flex-direction: row;
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
      <Text>{title}</Text>
    </SectionLeft>
    <SectionRight>
      <TouchableOpacity onPress={onPress}>
        {/*<SeeAll>See All</SeeAll>*/}
      </TouchableOpacity>
    </SectionRight>
  </SectionHeader>
);

export default SectionHeaderRow;
