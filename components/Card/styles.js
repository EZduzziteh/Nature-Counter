import { StyleSheet } from 'react-native';
import { DARK_GREY, THEME_GREEN } from '../Utilities/Constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 120,
    height: 150,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.08,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    color: DARK_GREY,
  },
  overviewCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  intensity: {
    textAlign: 'center',
    color: DARK_GREY,
    marginVertical: 5,
  },
  overViewCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: 170,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primary: {
    fontSize: 42,
  },
  secondary: {
    fontSize: 20,
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 380,
  },
  readTimeContainer: {
    position: 'absolute',
    backgroundColor: THEME_GREEN,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  readTimeText: {
    color: 'white',
    fontSize: 13,
  },
});

export default styles;
