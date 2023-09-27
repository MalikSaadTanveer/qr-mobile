import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';
const ImagePicker = ({photo, setPhoto}) => {

  let options = {
    maxWidth: 500,
    maxHeight: 500,
    mediaType: 'photo',
  };
  const handelImage = async () => {
    const result = await launchImageLibrary(options);
    if ('assets' in result) setPhoto(result.assets[0].uri);
  };

  return (
    <View>
      <LinearGradient
        colors={['#F3CD6B', '#BD7D08']}
        style={styles.gradient_border}>
        <View style={styles.white_border_view}>
          <View style={styles.profileImage_view}>
            <Image
              source={
                photo == null
                  ? require('../../assets/appLogo/blankProfile.png')
                  : {uri: photo}
              }
              style={styles.profileImage}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.camera_button} onPress={handelImage}>
          <LinearGradient
            colors={['#F3CD6B', '#BD7D08']}
            style={styles.camera_button_gradient}>
            <View>
              <Image source={require('../../assets/icons/Camera.png')} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  gradient_border: {
    width: 137,
    height: 137,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  white_border_view: {
    width: 132,
    height: 132,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage_view: {
    width: 124,
    height: 124,
    borderRadius: 100,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  camera_button: {
    position: 'absolute',
    right: -20,
    top: 0,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 100,
  },
  camera_button_gradient: {
    width: 52,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
