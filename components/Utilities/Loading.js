 import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, } from 'react-native';
import * as icons from '../../assets/icons';
import styles from '../../components/Utilities/styles';

    


const LoadingScreen = () => {
    return (
        <View style={styles.loadingView} >
            <icons.Nature style={styles.loadingImage} />
            <ActivityIndicator size="large" color="#24BF9C" />
            <Text style={styles.loadingText} >Loading . . .</Text>
        </View>
    );
};
            

export default LoadingScreen;
