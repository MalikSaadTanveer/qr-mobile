import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import fonts from '../utils/fonts';
import ScannerMaker from '../component/ScannerMaker';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import axios from 'axios';
import {ADD_MEMBERSHIP_DETAIL} from '../utils/config';
import {LinearTextGradient} from 'react-native-text-gradient';
const QrScannerScreen = ({navigation, route}) => {
  const {memberShipId, userId, roomId} = route.params;
  const [isFlash, setIsFlash] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState('');

  const onSuccess = async event => {
    const {data} = event;
    const dataObject = JSON.parse(data);
    try {
      let response = await axios.post(ADD_MEMBERSHIP_DETAIL, {
        room_id: dataObject.id,
        user_id: userId,
        membership_id: memberShipId,
      });

      // console.log('response', response.data);
      setResponse(response.data);
      setModalVisible(true);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleFlashLight = () => {
    setIsFlash(!isFlash);
  };
  const handleGoBack = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
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

      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        cameraStyle={{height: '100%'}}
        customMarker={<ScannerMaker />}
        flashMode={
          isFlash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {response.error ? response.error_details : response?.success_msg}
            </Text>
            <Pressable
              onPress={() => {
                handleGoBack();
              }}>
              <View style={styles.card_time_view}>
                <LinearTextGradient
                  locations={[0, 1]}
                  colors={['#F3CD6B', '#BD7D08']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text style={styles.textStyle}>ok</Text>
                </LinearTextGradient>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  headerLeft_button: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: '#FFFFFF40',
    alignItems: 'center',
    justifyContent: 'center',
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000d4',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 18,
    width: '80%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: fonts.PoppinsRegular,
    color: '#000000',
  },
  card_time_view: {
    width: 88,
    height: 28,
    backgroundColor: '#000000',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
