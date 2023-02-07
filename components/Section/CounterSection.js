import React from 'react';
import { Timer } from '../Counter';
import { Button, IconButton } from '../Button';
import styled from 'styled-components/native';

const StyledButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

/**
 *
 * @param elapsedTime
 * @param limit
 * @param runTime
 * @param manageCounter
 * @return {JSX.Element}
 */
const CounterSection = ({ elapsedTime, limit, runTime, manageCounter, navigation }) => {
  console.log('Counter Section', elapsedTime, limit);

  return (
    <>
      <Timer elapsedTime={elapsedTime} limit={limit} />
      <StyledButtonRow>
        <IconButton label="plus" />
        <IconButton onPress={manageCounter} label={runTime ? 'stop' : 'resume'} />
        <IconButton onPress={() => navigation.navigate('GoalSetting')} />
        <Button label="Log History" />
      </StyledButtonRow>
    </>
  );
};

export default CounterSection;
