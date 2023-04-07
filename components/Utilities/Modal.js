import React from 'react';
import Modal from 'react-native-modal';
import {
  Dimensions, Platform, Text, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceHeight = Platform.OS === 'ios'
  ? Dimensions.get('window').height
  : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');

const NCModal = ({
  children, title, active, setActive, autoHeight,
}) => (
  <Modal
    transparent
    isVisible={active}
    backdropOpacity={0.6}
    onBackdropPress={() => setActive(false)}
    onBackButtonPress={() => setActive(false)}
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
    deviceHeight={deviceHeight}
  >
    <View
      style={{
        width: '90%',
        height: autoHeight ? null : '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontWeight: '700',
            flex: 1,
            fontSize: 24,
          }}
        >
          {title}
        </Text>
        <Icon name="close-outline" onPress={() => setActive(false)} size={28} />
      </View>
      {children}
    </View>
  </Modal>
);

export default NCModal;
