import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../utils/fonts';
import {GradientBorderView} from '@good-react-native/gradient-border';
const HeaderWithLeftButton = ({
  title,
  onPress,
  rightIcon,
  rightOnPress,
  titleColor,
}) => {
  return (
    <View style={styles.header_view}>
      <TouchableOpacity onPress={onPress}>
        <GradientBorderView
          gradientProps={{
            colors: ['#F3CD6B', '#BD7D08'],
          }}
          style={styles.corner}>
          <Image source={require('../../assets/icons/arrowLeft.png')} />
        </GradientBorderView>
      </TouchableOpacity>
      <Text style={[styles.header_title, {color: titleColor}]}>{title}</Text>
      {rightIcon && (
        <View style={styles.rightIcon_view}>
          <TouchableOpacity onPress={rightOnPress}>
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      )}
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
    marginTop: 10,
    zIndex: 1,
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
  corner: {
    // position: 'absolute',
    width: 36,
    height: 36,
    borderWidth: 3,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon_view: {
    position: 'absolute',
    right: 30,
  },
  rightIcon: {
    width: 30,
    height: 30,
  },
});
