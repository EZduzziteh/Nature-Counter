import React from 'react';
import MainContainer from '../../components/Container/MainContainer';
import { Text, View } from 'react-native';
import BenefitCard from '../../components/Card/BenefitCard';
import styled from 'styled-components/native'

const BenefitsListScreen = ({ benefits }) => {
  const { data } = benefits;

  const BenefitsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const StyledText = styled.Text`
    margin: 10px;
  `;

  const renderBenefits = () => (
    data.map((b) => (
      <View style={{ padding: 5 }}>
        <BenefitCard
          key={b._id}
          icon={b.icon}
          title={b.benefit}
          progress={b.gainTime}
        />
      </View>
      ))
  );

  return (
    <MainContainer>
      <StyledText>
        Showing {data?.length || 0} benefits
      </StyledText>
      <BenefitsContainer>
      {
        benefits
          ? renderBenefits()
          : <Text>No Benefits to show</Text>
      }
      </BenefitsContainer>
    </MainContainer>
  );
}

export default BenefitsListScreen;
