import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const BottomBarWithButton = ({onPress}) => {
  return (
    <View style={styles.bottom_view}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={['#F3CD6B', '#BD7D08']}
          style={styles.bottom_view_inner_button}>
          <Image source={require('../../assets/icons/qrcodeRounded.png')} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBarWithButton;

const styles = StyleSheet.create({
  bottom_view: {
    width: '100%',
    height: 80,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    elevation: 10,
    alignItems: 'center',
  },
  bottom_view_inner_button: {
    width: 68,
    height: 68,
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: -13,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
