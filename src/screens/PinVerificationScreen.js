import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import fonts from '../utils/fonts';
import OTPInputFiled from '../component/OTPInputFiled';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';
import {LinearTextGradient} from 'react-native-text-gradient';
const PinVerificationScreen = ({navigation, route}) => {
  const {Data} = route.params;
  const [pinCode, setPinCode] = useState('');
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handelSubmit = async () => {
    setLoader(true);
    if (Data?.response?.membership?.user_id?.pin_code === parseInt(pinCode)) {
      if (
        !Data?.response?.membership.room_id ||
        Data?.response?.membership.room_id === null
      ) {
        navigation.replace(navigationString.RoomListScreen, {
          responseData: Data,
        });
      } else {
        navigation.replace(navigationString.MemberShipDetailView, {
          responseData: Data.response,
        });
      }
    } else {
      setLoader(false);
      setModalVisible(true);
      setModalMessage('Your PinCode in incorrect!');
    }
    setLoader(false);
    setPinCode('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <HeaderWithLeftButton
        leftIcon={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content_view}>
        <Text style={styles.heading_text}>Enter PIN Code</Text>
        <View style={styles.pin_view}>
          <OTPInputFiled setCode={setPinCode} />
        </View>
        <View style={styles.button}>
          <CustomButton
            title={'Submit'}
            loader={loader}
            onPress={handelSubmit}
          />
        </View>
      </View>
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
            <Text style={styles.modalText}>{modalMessage}</Text>

            <Pressable
              onPress={() => {
                setModalVisible(false);
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

export default PinVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin_view: {
    width: '100%',
    alignItems: 'center',
    marginTop: 89,
  },
  heading_text: {
    color: '#000',
    fontFamily: fonts.PoppinsMedium,
    fontSize: 24,
  },
  button: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 50,
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
