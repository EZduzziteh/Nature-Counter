import React, { useState } from 'react';
import {
  StyleSheet, View, TextInput as RNTextInput, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_GREEN } from '../Utilities/Constants';

/**
 *
 * @param placeholder
 * @param value
 * @param onChangeText
 * @return {JSX.Element}
 * @constructor
 */
const TextInput = ({
  placeholder, value, onChangeText, secureTextEntry, passwordInput, eyeIcon, onPress,
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <View style={[styles.form, focused ? styles.inputActive : null]}>
      <RNTextInput
        autoCapitalize="none"
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={txt => {
          setFilled(txt !== '');
          onChangeText(txt);
        }}
      />
      {/* TODO: animate this transition */}
      <View
        style={[
          styles.placeholderTextContainer,
          focused || filled ? styles.inputOccupied : null,
        ]}
        pointerEvents="none"
      >
        <Text style={[styles.placeholderText, focused ? styles.inputActive : null]}>
          {placeholder}
        </Text>
      </View>
      {passwordInput && (
        <Icon style={styles.eyeIcon} name={eyeIcon ? 'eye' : 'eye-off'} size={25} onPress={onPress} />
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    height: 50,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
    width: '100%',
  },
  placeholderText: {
    fontSize: 14,
    color: '#707070',
    paddingHorizontal: 3,
  },
  placeholderTextContainer: {
    position: 'absolute',
    left: 10,
    top: 14,
  },
  inputActive: {
    color: THEME_GREEN,
    borderColor: THEME_GREEN,
  },
  inputOccupied: {
    left: 10,
    top: -10,
    backgroundColor: '#F2F2F2',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  form: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#A4A9AE',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    alignItems: 'center',
  },
});
