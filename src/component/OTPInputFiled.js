import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import fonts from '../utils/fonts';
const OTPInputFiled = ({setCode}) => {
  return (
    <OTPInputView
    style={styles.pin_container}
    pinCount={4}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled={code => {
        setCode(code);
    }}
  />
  )
}

export default OTPInputFiled

const styles = StyleSheet.create({
    pin_container: {
        width: '80%',
        height: 100,
      },
      borderStyleBase: {
        width: 30,
        height: 45,
      },
    
      borderStyleHighLighted: {
        borderColor: '#F3CD6B',
      },
    
      underlineStyleBase: {
        width: 55,
        height: 55,
        borderWidth: 1,
        // borderBottomWidth: 1,
        borderColor: '#00000029',
        color: '#212121',
        fontSize: 20,
        fontFamily: fonts.PoppinsMedium,
      },
    
      underlineStyleHighLighted: {
        borderColor: '#F3CD6B',
      },
})