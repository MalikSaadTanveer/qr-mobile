import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const DoubleTextInputWithLabel = ({
  firstLabel,
  firstValue,
  setFirstValue,
  lastLabel,
  lastValue,
  setLastValue,
}) => {
  return (
    <View style={styles.input_container}>
      <View style={styles.input_view}>
        <Text style={styles.input_label}>{firstLabel}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#7D7D82'}
          value={firstValue}
          onChangeText={text => {
            setFirstValue(text);
          }}
        />
      </View>
      <View style={styles.input_view}>
        <Text style={styles.input_label}>{lastLabel}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#7D7D82'}
          value={lastValue}
          onChangeText={text => {
            setLastValue(text);
          }}
        />
      </View>
    </View>
  );
};

export default DoubleTextInputWithLabel;

const styles = StyleSheet.create({
  input_view: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 145,
  },
  input_label: {
    marginBottom: 3,
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
    color: '#161617',
  },
});
