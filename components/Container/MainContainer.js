import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const StyledContainer = styled.ScrollView`
  height: 100%;
  width: ${Dimensions.get('window').width};
  padding: 10px;
`;

const MainContainer = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default MainContainer;
