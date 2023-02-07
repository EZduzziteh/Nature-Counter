import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';


const LoadingScreen = () => {
  return (
      <View style={styles.container}>
          <Text>Data Loading</Text>
      <ActivityIndicator size='large' style={{marginTop: 36}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingScreen
