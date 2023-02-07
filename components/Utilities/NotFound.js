import { Icon } from 'react-native-elements';
import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const StyledText = styled.Text`
  margin-left: 10px;;
`;

const NotFound = ({ item }) => (
  <StyledView>
    <Icon name="text-box-remove-outline" type="material-community" color="black" size={24} />
    <StyledText>
      {
          item
            ? `No ${item} to show`
            : 'Nothing to show'
        }
    </StyledText>
  </StyledView>
);

export default NotFound;
