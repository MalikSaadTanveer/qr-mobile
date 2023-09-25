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
  leftIcon,
}) => {
  return (
    <View style={styles.header_view}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress} style={{zIndex: 1}}>
          <GradientBorderView
            gradientProps={{
              colors: ['#F3CD6B', '#BD7D08'],
            }}
            style={styles.corner}>
            <Image
              source={require('../../assets/icons/leftVector.png')}
              style={styles.leftIcon_button}
            />
          </GradientBorderView>
        </TouchableOpacity>
      )}
      {title && (
        <Text style={[styles.header_title, {color: titleColor}]}>{title}</Text>
      )}
      {rightIcon && (
        <View>
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
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
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
    width: 36,
    height: 36,
    borderWidth: 3,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: 30,
    height: 30,
  },
  leftIcon_button: {
    width: 9,
    height: 15,
  },
});
