import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';

const HeaderWithLeftButton = ({title, onPress}) => {
  return (
    <View style={styles.header_view}>
      <TouchableOpacity style={styles.headerLeft_button} onPress={onPress}>
        <Image source={require('../../assets/icons/leftArrow.png')} />
      </TouchableOpacity>
      <Text style={styles.header_title}>{title}</Text>
    </View>
  );
};

export default HeaderWithLeftButton;

const styles = StyleSheet.create({
  header_view: {
    width: 400,
    height: 56,
    // marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    // marginTop: 10,
  },
  headerLeft_button: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: '#c40e0e80',
    borderColor: '#00000080',
    borderWidth: 1.5,
  },
  header_title: {
    fontSize: 18,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginLeft: 20,
    color: '#000000',
    fontFamily: fonts.PoppinsMedium,
  },
});
