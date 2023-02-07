import React from 'react';
import { Dimensions, Text } from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import styled from 'styled-components/native';
import { MARKERS_DATA } from '../../screens/App/Discover/MARKERS_DATA';
import ListItem from './ListItem';

const windowHeight = Dimensions.get('window').height;

const Header = styled.View`
  align-items: center;
  background-color: white;
  padding: 0 20px;
`;

const PanelHandle = styled.View`
  width: 41px;
  height: 4px;
  background-color: #E1E1E1;
  border-radius: 17px;
`;

const BottomSheet = ({ onPressElement }) => {
  return (
    <ScrollBottomSheet
      componentType="FlatList"
      snapPoints={[100, '50%', windowHeight - 200]}
      initialSnapIndex={1}
      renderHandle={() => (
        <Header>
          <PanelHandle />
        </Header>
      )}
      data={MARKERS_DATA}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <ListItem item={item} onPressElement={onPressElement} />
      )}
      contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
    />
  );
};

export default BottomSheet;
