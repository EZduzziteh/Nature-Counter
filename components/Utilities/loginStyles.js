import React from 'react';
import {StyleSheet, Button, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    loginLogo: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        resizeMode: 'stretch'
    },
    loginGreeting: {
        marginTop: 40,
        fontSize: 34,
        fontWeight: 'bold',
        width: 275,
        lineHeight: 40,
        alignItems: 'center',
        alignSelf: 'center',
        fontFamily: 'Roboto'
    },
    bar: {
        marginTop: -20,
        backgroundColor: 'rgba(36,191,156,0.2)',
        height: 17,
        width: 269,
        alignSelf: 'center'
    },
    error: {
        height: 64,
        justifyContent: 'center',
        marginHorizontal: 38,
        marginBottom: 12
    },
    form: {
        marginHorizontal: 38,
        marginBottom: 2,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 12,
        alignItems: 'center',
    },
    inputTitle: {
        alignSelf: 'flex-start',
        color: '#8A8F9E',
        textTransform: 'uppercase'
    },
    input: {
        paddingLeft: 12,
        height: 38,
        fontSize: 14,
        lineHeight: 22,
        color: 'rgba(0,0,0,0.5)',
        width: 279
    },
    button: {
        height: 36,
        width: 165,
        backgroundColor: '#24BF9C',
        marginHorizontal: 38,
        borderRadius: 30,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 10,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        height: 50,
        width: 50,
        tintColor: '#414959'
    },
    logo: {
        alignItems: 'center',
    },
    greeting: {
        marginTop: 12,
        fontSize: 18,
        textAlign: 'center'
    },
    message: {
      height: 40,
      justifyContent: 'center',
      marginHorizontal: 38,
      alignSelf: 'center'
    },
    buttonContainer: {
      marginTop: 12,
      height: 100,
      justifyContent: 'space-evenly',
      marginHorizontal: 38
    },
    verifyButton: {
      backgroundColor: '#56ff00',
      borderRadius: 4,
      height: 36,
      justifyContent: 'center',
      marginHorizontal: 38
    },
    buttonDisabled: {
      backgroundColor: '#acff7f',
      borderRadius: 4,
      height: 36,
      justifyContent: 'center',
      marginHorizontal: 38
    },
    buttonText: {
      color: 'white',
      alignSelf: 'center',
      fontWeight: '600',
      fontSize: 16
    }

});

export default styles;
