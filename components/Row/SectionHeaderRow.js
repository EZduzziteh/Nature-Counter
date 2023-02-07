import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { THEME_GREEN } from '../Utilities/Constants';

const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

const SectionLeft = styled.View`
  margin-left: 30px;
`;

const SectionRight = styled.View`
  margin-right: 30px;
`;

const SeeAll = styled.Text`
  color: ${THEME_GREEN};
`;

const SectionHeaderRow = ({ title, onPress }) => (
  <SectionHeader>
    <SectionLeft>
      <Text>{title}</Text>
    </SectionLeft>
    <SectionRight>
      <TouchableOpacity onPress={onPress}>
        <SeeAll>See All</SeeAll>
      </TouchableOpacity>
    </SectionRight>
  </SectionHeader>
);

export default SectionHeaderRow;
