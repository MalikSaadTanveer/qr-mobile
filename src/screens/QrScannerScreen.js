import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Image,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import fonts from '../utils/fonts';
import ScannerMaker from '../component/ScannerMaker';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
const QrScannerScreen = ({navigation}) => {
  const [isFlash, setIsFlash] = useState(false);
  const onSuccess = event => {
    const {data} = event;

    Alert.alert('QR Code Scanned', data);
  };
  const handleFlashLight = () => {
    setIsFlash(!isFlash);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
      <View style={styles.header_view}>
        <HeaderWithLeftButton
          title={'QR Scanner'}
          onPress={() => {
            navigation.goBack();
          }}
          rightIcon={require('../../assets/icons/flashlight.png')}
          rightOnPress={handleFlashLight}
          titleColor={'#FFFFFF'}
        />
      </View>
      {/* <View style={styles.header_view}>
        <TouchableOpacity
          style={styles.headerLeft_button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/icons/leftArrow.png')}
            tintColor={'#ffffff'}
          />
        </TouchableOpacity>
        <Text style={styles.header_title}>QR Scanner</Text>
      </View> */}

      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        reactivate={true}
        cameraStyle={{height: '100%'}}
        reactivateTimeout={1000}
        customMarker={<ScannerMaker />}
        flashMode={
          isFlash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.on
        }
        //   topContent={
        //     <View style={styles.centerText}>
        //       <View style={styles.header_view}>
        //         <TouchableOpacity
        //           style={styles.headerLeft_button}
        //           onPress={() => {
        //             navigation.goBack();
        //           }}>
        //           <Image source={require('../../assets/icons/leftArrow.png')} />
        //         </TouchableOpacity>
        //         <Text style={styles.header_title}>QR Scanner</Text>
        //       </View>
        //     </View>
        //   }
        //   bottomContent={
        //     <TouchableOpacity
        //       style={styles.buttonTouchable}
        //       onPress={() => {
        //         handleFlashLight();
        //       }}>
        //       <Image
        //         source={require('../../assets/icons/flashlight.png')}
        //         tintColor={'black'}
        //       />
        //       <Text style={styles.flashLight_text}>Flash Light</Text>
        //     </TouchableOpacity>
        //   }
      />
      {/* <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => {
          handleFlashLight();
        }}>
        <Image source={require('../../assets/icons/flashlight.png')} />
        <Text style={styles.flashLight_text}>Flash Light</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default QrScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  centerText: {
    // flex: 1,
    // fontSize: 18,
    // padding: 32,
    // color: '#777',
    position: 'absolute',
    top: 100,
    right: 50,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 400,
    position: 'absolute',
    bottom: 20,
  },
  header_view: {
    // width: 400,
    // height: 56,
    // marginTop: 20,
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 20,
    // marginTop: 20,
    position: 'absolute',
    // top: 10,
    zIndex: 1,
  },
  headerLeft_button: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: '#FFFFFF40',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: '#c40e0e80',
    borderColor: '#FFFFFF80',
    borderWidth: 1.5,
  },
  header_title: {
    fontSize: 16,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginLeft: 20,
    color: '#ffffff',
    fontFamily: fonts.PoppinsMedium,
  },
  flashLight_text: {
    marginTop: 10,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: fonts.PoppinsMedium,
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '90deg'}],
  },
});
