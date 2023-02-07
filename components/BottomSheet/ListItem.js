import React from 'react';
import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

const Row = styled(Pressable)`
  background-color: ${(pressed) => pressed ? '#FAFAFA' : 'white'};
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

const StyledAvatar = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 50px;
  margin-right: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color};
`;

const StyledImage = styled.Image`
  height: 65%;
  width: 65%;
`;

const StyledTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #2F3136;
`;

const StyledDirection = styled.Text`
  font-size: 12px;
  color: #2F3136;
`;

const ListItem = ({ item, onPressElement }) => {
  // const handlePress = () => onPressElement(item.id, item.latitude, item.longitude);
  const handlePress = () => onPressElement(item);

  return (
    <Row onPress={handlePress}>
      <StyledAvatar color={item.color}>
        <StyledImage source={item.img} resizeMode="contain" />
      </StyledAvatar>
      <View>
        <StyledTitle>{item.name}</StyledTitle>
        <StyledDirection>{item.direction}</StyledDirection>
      </View>
    </Row>
  );
};

export default ListItem;
