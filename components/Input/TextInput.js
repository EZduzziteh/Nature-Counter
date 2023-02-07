import React from 'react';
import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 *
 * @param placeholder
 * @param value
 * @param onChangeText
 * @return {JSX.Element}
 * @constructor
 */
const TextInput = ({ placeholder, value, onChangeText, secureTextEntry, passwordInput, eyeIcon, onPress }) => {
  return (
    <View style={styles.form}>
      <RNTextInput
        autoCapitalize="none"
        placeholder={placeholder}
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {passwordInput && (
        <Icon name={eyeIcon ? 'eye' : 'eye-off'} size={25} onPress={onPress} />
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingLeft: 10,
    height: 50,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
    width: 279,
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
});
