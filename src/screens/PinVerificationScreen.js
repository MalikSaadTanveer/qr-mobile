import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import fonts from '../utils/fonts';
import OTPInputFiled from '../component/OTPInputFiled';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';

const PinVerificationScreen = ({navigation}) => {
  const [pinCode, setPinCode] = useState('');
  const [loader, setLoader] = useState(false);
  const handelSubmit = () => {
    // setLoader(true);
    navigation.navigate(navigationString.RoomListScreen);
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
});
