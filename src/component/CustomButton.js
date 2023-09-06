import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../utils/fonts';
const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#F3CD6B', '#BD7D08']} style={styles.button}>
        <Text style={styles.button_text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 323,
    height: 38,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: 16,
    fontFamily: fonts.PoppinsMedium,
    color: '#ffffff',
  },
});