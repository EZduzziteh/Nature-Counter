import React from 'react';
import { useMarkerAnimation } from './useMarkerAnimation';
import Animated from 'react-native-reanimated';
import { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const StyledView = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

const StyledAnimatedView = styled(Animated.View)`
  background-color: ${({ color }) => color};
  transform: scale(3);
  height: 22px;
  width: 22px;
  border-radius: 20px;
  border-color: white;
  border-width: 2px;
`;

export function CustomMarker({ id, selectedMarker, color, latitude, longitude }) {
  const scale = useMarkerAnimation({ id, selectedMarker });

  return (
    <Marker coordinate={{ latitude, longitude}}>
      <StyledView>
        <StyledAnimatedView scale={scale} color={color} />
      </StyledView>
    </Marker>
  )
}
