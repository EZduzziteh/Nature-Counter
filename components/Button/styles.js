import { StyleSheet } from 'react-native';
import { THEME_DARK_GREEN, THEME_GREEN } from '../Utilities/Constants';

const styles = StyleSheet.create({
  icon: {
    width: 74,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 50,
    width: 50,
    tintColor: '#414959',
  },
  signUpNowPromptContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24,
    fontSize: 12,
  },
  dontHaveAccountLabel: {
    color: 'rgba(0,0,0,0.5)',
    marginRight: 4,
  },
  signUpNowButton: {
    color: THEME_GREEN,
    fontWeight: '700',
  },
  button: {
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  large: {
    marginHorizontal: 38,
    height: 50,
    width: 220,
  },
  small: {
    marginHorizontal: 5,
    height: 40,
    width: 78,
  },
  green: {
    backgroundColor: THEME_GREEN,
    shadowRadius: 10,
  },
  white: {
    backgroundColor: '#fff',
    shadowRadius: 5,
  },
  transparent: {
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: THEME_GREEN,
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    alignSelf: 'center',
  },
  greenLabel: {
    color: 'white',
  },
  whiteLabel: {
    color: 'black',
  },
  transparentLabel: {
    color: THEME_GREEN,
  },
  activeGoalButton: {
    height: 50,
    width: 110,
    backgroundColor: THEME_DARK_GREEN,
    marginHorizontal: 38,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inactiveGoalButton: {
    height: 50,
    width: 110,
    backgroundColor: THEME_GREEN,
    marginHorizontal: 38,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconButton: {
    height: 50,
    width: 70,
    backgroundColor: 'white',
    marginHorizontal: 38,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlineButtonContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginRight: 10,
  },
  outlineButtonLabel: {
    color: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default styles;
