import React from 'react';
import Svg, { Circle, SvgUri } from 'react-native-svg';
import { Image, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  width: 25%;
  margin-bottom: 20px;
`;

const StyledIcon = styled.Image`
  height: 80px;
  width: 80px;
`;

const StyledText = styled.Text`
  width: 90%;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
`;

const BenefitListItem = ({ label, iconName }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <SvgUri uri={''} />
      <Text style={{
        width: '90%', textAlign: 'center', marginTop: 10, fontWeight: 'bold',
      }}
      >
        {label}
      </Text>
    </View>
  );
};

export const Benefit = ({ source, label }) => (
  <Container>
    <StyledIcon source={source} />
    <StyledText>
      {label}
    </StyledText>
  </Container>
);

export default BenefitListItem;
