import React from 'react';
import styled from 'styled-components/native';
import { RefreshButton } from './RefreshButton';

const Container = styled.View`
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

const TopBar = ({ onPressElement }) => {
  return (
    <Container>
      <RefreshButton onPressElement={onPressElement} />
    </Container>
  );
};

export default TopBar;
