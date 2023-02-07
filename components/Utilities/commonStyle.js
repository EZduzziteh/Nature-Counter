import { Platform, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const global = {
  body: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.24,
    color: '#333333',
  },
  black80: {
    color: '#333333',
  },
  black60: {
    color: '#666666',
  },
  black40: {
    color: '#999999',
  },
  black20: {
    color: '#CDCDCD',
  },
  header: {
    backgroundColor: '#ffffff',
    maxWidth: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  window: {
    backgroundColor: '#ffffff',
    maxWidth: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
  },
  list: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    width: 90,
  },
  listType: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
    alignSelf: 'center',
    paddingTop: 12,
  },
  listActive: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 12,
  },
  icon: {
    color: '#24BF9C',
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 50,
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 15,
  },
  flex: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bold: {
    fontWeight: Platform.select({ ios: '500', android: 'bold' }),
  },

  centerAlign: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },

};

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export default global;
