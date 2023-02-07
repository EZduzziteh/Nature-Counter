import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View,
} from 'react-native';
import CircularProgress from './CircularProgress';
import { COLOR_BG, COLOR_FG, DARK_GREY } from '../Utilities/Constants';
import styled from 'styled-components/native';
import LEAF_ICON from '../../assets/leaf_icon.png';

const Timer = ({ elapsedTime, limit }) => {
  const calculateTimeElapsed = () => Math.floor(elapsedTime * limit);
  const calculatePercentElapsed = () => Math.floor(elapsedTime * 100);

  const StyledView = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  `;

  const CounterCap = styled.TouchableHighlight`
    border-radius: ${() => Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}px;
    width: ${() => Dimensions.get('window').width * 0.5}px;
    height: ${() => Dimensions.get('window').width * 0.5}px;
    background-color: #F4F4F4;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    box-shadow: 0px 4px 5px rgba(0,0,0, 0.10);
  `;

  const TotalTime = styled.Text`
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: -5px;
  `;

  const TimeLimit = styled.Text`
    color: ${DARK_GREY};
    text-align: center;
    font-size: 16px;
  `;

  const PercentContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  `;

  return (
    <StyledView>
      <View>
        <View>
          <CircularProgress
            bg={COLOR_BG}
            fg={COLOR_FG}
            {...{ elapsedTime }}
          />
        </View>
        <View style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <CounterCap>
            <View>
              <TotalTime>
                {calculateTimeElapsed()}
              </TotalTime>
              <TimeLimit>
                /
                {' '}
                {limit}
                {' '}
                min
              </TimeLimit>
              <PercentContainer>
                <Image
                  style={{ height: 25, width: 20 }}
                  source={LEAF_ICON}
                />
                <Text style={{
                  color: '#25BF9D',
                  fontSize: 18,
                  marginLeft: 5,
                }}
                >
                  {calculatePercentElapsed()}
                  %
                </Text>
              </PercentContainer>
            </View>
          </CounterCap>
        </View>
      </View>
    </StyledView>
  );
};

export default Timer;
