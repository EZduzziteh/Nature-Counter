import { StyleSheet } from 'react-native';
import { MEDIUM_GREY, THEME_GREEN } from '../Utilities/Constants';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    height: 70,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rowButtonText: {
    fontSize: 18,
    marginLeft: 20,
  },
  banner: {
    height: 60,
    backgroundColor: THEME_GREEN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
  },
  sectionLeft: {
    marginLeft: 30,
  },
  sectionRight: {
    marginRight: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  seeAll: {
    color: THEME_GREEN,
  },
});

export default styles;
