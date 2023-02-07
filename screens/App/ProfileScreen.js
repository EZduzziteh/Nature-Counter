import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import RowButton from '../../components/Row/RowButton';

const ProfileScreen = ({ user, logout }) => (
  <View>
    <RowButton
      label="Edit Profile"
      icon="account-edit-outline"
      onPress={() => {
      }}
    />
    <RowButton
      label="Notifications"
      icon="bell-outline"
      onPress={() => {
      }}
    />
    <RowButton
      label="Privacy"
      icon="shield-check-outline"
      onPress={() => {
      }}
    />
    <RowButton
      label="Help"
      icon="help-circle-outline"
      onPress={() => {
      }}
    />
    <RowButton
      label="Log out"
      icon="logout"
      onPress={logout}
    />
  </View>
);

ProfileScreen.defaultProps = {
  user: {},
  logout: () => {},
};

ProfileScreen.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default ProfileScreen;
