import { useEffect, useState } from 'react';
import { useTimingTransition } from 'react-native-redash/lib/module/v1';
import Animated from 'react-native-reanimated';

export function useMarkerAnimation({ id, selectedMarker }) {
  const [active, setActive] = useState(0);
  const transition = useTimingTransition(active, { duration: 200 });
  const scale = Animated.interpolate(transition, { inputRange: [0, 1], outputRange: [1, 1.5]});

  useEffect(() => {
    const isActive = id === selectedMarker ? 1 : 0;

    setActive(isActive);
  }, [id, selectedMarker]);

  return scale;
}
