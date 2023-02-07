import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { default as Tree } from '../../assets/tree.png';

export function Avatar() {
  return (
    <View style={styles.container}>
      <Image source={Tree} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
