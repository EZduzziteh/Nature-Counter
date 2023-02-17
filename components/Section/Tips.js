import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Tips = () => {

  return (
    <>
    <Text>Tips</Text>
    <View style = {styles.tipsContainer}>

    <Text style = {styles.tipsContainer} >did you know...</Text>
    <Text style={styles.tipsText}>A US study showed that in places that have more greenery and nature, residents reported a lowered level of depression symptoms.</Text>
    </View>
    </>
  );
};

export default Tips;
