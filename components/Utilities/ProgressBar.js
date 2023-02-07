import { View, Animated, StyleSheet } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { THEME_GREEN } from './Constants';

const Bar = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 80px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 30px;
`;

const ProgressBar = ({ progress }) => {
  const progressPercent = () => `${parseInt(progress, 10)}%`;

  return (
    <Bar>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: THEME_GREEN,
            borderRadius: 30,
            width: progressPercent(),
          },
        ]}
      />
    </Bar>
  );
};

export default ProgressBar;
