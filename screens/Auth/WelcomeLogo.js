import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import LargeLogo from '../../assets/Frame26.png';
// import SmallLogo from '../../assets/Frame26.png';
const SmallLogo = LargeLogo; // TODO: use seperate logo

const WelcomeLogo = ({ text, width, large }) => (
  <View>
    <View>
      <Image
        style={[styles.loginLogo, large ? null : styles.loginLogoSmall]}
        source={large ? LargeLogo : SmallLogo}
      />
    </View>

    <Text style={styles.loginGreeting}>{text}</Text>
    <View style={{ ...styles.bar, width }} />
  </View>
);

export default WelcomeLogo;

const styles = StyleSheet.create({
  loginLogo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  loginLogoSmall: {
    width: 120,
    height: 120,
  },
  loginGreeting: {
    marginTop: 40,
    marginBottom: 70,
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 40,
    alignItems: 'center',
    fontFamily: 'Roboto',
    marginHorizontal: 5,
  },
  bar: {
    marginTop: -89,
    marginBottom: 20,
    marginLeft: 3,
    backgroundColor: '#DCEFE0',
    zIndex: -1,
    height: 17,
  },
});
