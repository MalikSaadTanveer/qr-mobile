import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const TextInputWithLabel = ({
  label,
  placeholder,
  isSecure,
  isEditable,
  value,
  setValue,
}) => {
  return (
    <View style={styles.input_view}>
      <Text style={styles.input_label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'#7D7D82'}
        secureTextEntry={isSecure}
        editable={isEditable}
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  input_view: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7D7D82',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 13,
    fontSize: 14,
    color: '#161617',
    fontFamily: fonts.PoppinsRegular,
  },
  input_label: {
    marginBottom: 3,
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
    color: '#161617',
  },
});
