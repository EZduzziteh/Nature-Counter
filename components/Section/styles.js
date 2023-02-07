import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  badge: {
    width: 120,
    height: 120,
  },
  overviewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
