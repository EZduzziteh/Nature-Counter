import { StyleSheet } from 'react-native';
import { RADIUS, THEME_GREEN } from '../Utilities/Constants';

const styles = StyleSheet.create({
  topHalfCircle: {
    width: RADIUS * 2,
    height: RADIUS,
    overflow: 'hidden',
  },
  bottomHalfCircle: {
    backgroundColor: THEME_GREEN,
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS,
  },
});

export default styles;
