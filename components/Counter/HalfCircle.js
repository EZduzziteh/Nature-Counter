import React from 'react';
import styled from 'styled-components/native';
import { RADIUS } from '../Utilities/Constants';

const TopHalfCircle = styled.View`
  width: ${() => RADIUS * 2}px;
  height: ${RADIUS}px;
  overflow: hidden;
`;

const BottomHalfCircle = styled.View`
  background-color: ${(props) => props.color};
  width: ${() => RADIUS * 2}px;
  height: ${() => RADIUS * 2}px;
  border-radius: ${RADIUS}px;
`;

const HalfCircle = ({ color }) => {
  console.log('color', color);
  return (
    <TopHalfCircle>
      <BottomHalfCircle color={color} />
    </TopHalfCircle>
  );
};

export default HalfCircle;
