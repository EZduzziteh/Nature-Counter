import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as userActions from './redux/actions/userActions';
import {LoginScreen, RegisterScreen, resetPasswordScreen, newPasswordScreen, LoadingScreen, Main} from './screens';
import { Provider as PaperProvider } from 'react-native-paper';
import MainScreens from './screens/App/MainScreens';

const authStack = createStackNavigator();

const App = (props) => {
  const { email, emailVerified, userActions, displayName, uid } = props;

  const [initializing, setInitializing] = useState(true);

  const handleDynamicLink = async (link) => {
    if (link.url === 'https://naturecounter.page.link/email-verification') {
      console.log('here after receiving deep link');
      await auth().currentUser.reload();
    }
  };

  const onUserChanged = (user) => {
    if (!user) return null;
    userActions.initUserInfo(user);
  };

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    if (initializing) {
      setInitializing(false);
    }
    if (!user) {
      return null;
    }
    userActions.initUserInfo(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const userSubscribe = auth().onUserChanged(onUserChanged);
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      subscriber;
      unsubscribe();
      userSubscribe;
    };
  }, []);

  const handleLogout = () => {
    auth().signOut();
    userActions.clearUserInfo();
  };

  if (initializing) return <LoadingScreen />;

  if (!email) {
    return (
      <NavigationContainer>
        <authStack.Navigator screenOptions={{ headerShown: false }}>
          <authStack.Screen name="Login" component={LoginScreen} />
          <authStack.Screen name="Register" component={RegisterScreen} />
          <authStack.Screen name="resetPassword" component={resetPasswordScreen} />
          <authStack.Screen name="newPassword" component={newPasswordScreen} />


          {/* Screen for Testing Component */}
          {/* <authStack.Screen name="Test" component={Test} /> */}
        </authStack.Navigator>
      </NavigationContainer>

    );
  }

  /**
   * Added  Paper Provider to handle Select/Drop down component
   */
  return (
    <PaperProvider>
      <MainScreens
        logout={handleLogout}
        user={email}
        emailVerified={emailVerified}
        userName={displayName}
      />
    </PaperProvider>
  );
};

export default connect(
  (state) => ({
    displayName: state.getIn(['user', 'displayName']),
    email: state.getIn(['user', 'email']),
    emailVerified: state.getIn(['user', 'emailVerified']),
    uid: state.getIn(['user', 'uid']),
  }),
  (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(App);

// const obj = {
//   "additionalUserInfo": {
//     "isNewUser": true,
//     "profile": null,
//     "providerId": "password",
//     "username": null
//   },
//   "user": {
//     "displayName": null,
//     "email": "juan@mail.com",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "metadata": [Object],
//     "phoneNumber": null,
//     "photoURL": null,
//     "providerData": [Array],
//     "providerId": "firebase",
//     "refreshToken": "AE0u-NeZrg5obNi2uTFdMTHjR3QrBJNbH4aAW-2iKZCPhed7JDyQ6VMQ6yuuYscnVK5_gz-RFM-Guh9k_bjNuoh_G-myidTMIDIWjXXcsraIKLEMEqd8o6MHdMUcrf3_XKWLDwa2y-8zNTAnKqdYkJf5vNM1jZ60JyyxKqiAsTKN35QBICh8hXXJutLYKFClEKLEp4aGMG9tVrkjPWlgdbeRaMxoc-DkSA",
//     "uid": "b2ovnSCAFCQS3u2xxridLn6cds03"
//   }
// }

// const user = {
//   "displayName": "test",
//   "email": "test@m.com",
//   "emailVerified": false,
//   "isAnonymous": false,
//   "metadata": {
//     "creationTime": 1589405754024, "lastSignInTime": 1589405754024
//   },
//   "phoneNumber": null,
//   "photoURL": null,
//   "providerData": [[Object]],
//    "providerId": "firebase",
//    "refreshToken": "AE0u-NcnV-rrzBNm_z-s-2qBYuefgoXeQ5GpSKyXMjXywb7QOnkjH-F6Q9XXLYK3yGFO2crYPRZUOCIedxDkpgaFdpPSHW1sLj3QaoZysXFI8F5ToI86riptZBbMb2vcTBkbannpgBVTznXHXgVMaQyamffTjtGOYCQVP_gl0TEI_s3acprKUDcKdyGL-LwQU8LxuUoLOjc3eXpJM5ULrEtqEtwjYLkVJQ",
//    "uid": "QUGKbk1k6yMFIFjSjqFxblRtufQ2"
// }

