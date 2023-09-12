import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/fonts';
import TextInputWithLabel from '../component/TextInputWithLabel';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {USER_LOGIN} from '../utils/config';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const handelSignIn = async () => {
    setLoader(true);
    await axios
      .post(USER_LOGIN, {
        email: email,
        password: password,
      })
      .then(async response => {
        if (!response?.data?.error) {
          const userId = JSON.stringify(response?.data?.response?._id);
          await AsyncStorage.setItem('userId', userId);
          navigation.replace(navigationString.Home);
          setLoader(false);
        }
      })
      .catch(error => {
        console.log('error', error);
        setLoader(false);
        Alert.alert(
          'Incorrect Email & password',
          'Please Enter correct Email & Password!',
        );
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={'#000000'}
          barStyle={'light-content'}
        />
        <View style={styles.image_view}>
          <Image
            source={require('../../assets/appLogo/logo.png')}
            style={styles.logo_image}
          />
        </View>
        <View style={styles.input_container}>
          <View style={styles.input_container_upper_button_view}>
            <View style={styles.input_container_upper_button}>
              <Text style={styles.input_container_upper_button_text}>
                Sign In
              </Text>
            </View>
          </View>

          <TextInputWithLabel
            label={'Email Address'}
            placeholder={'Enter Email Address'}
            value={email}
            setValue={setEmail}
          />
          <TextInputWithLabel
            label={'Password'}
            placeholder={'Enter Password'}
            isSecure={true}
            value={password}
            setValue={setPassword}
          />

          <View style={styles.button_view}>
            <CustomButton
              title={'Sign In'}
              onPress={handelSignIn}
              loader={loader}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image_view: {
    marginTop: 100,
    position: 'relative',
    alignItems: 'center',
  },
  input_container: {
    height: 330,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 50,
    borderRadius: 12,
  },
  input_container_upper_button_view: {
    height: 54,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input_container_upper_button: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  input_container_upper_button_text: {
    fontSize: 16,
    fontFamily: fonts.PoppinsMedium,
    color: '#161617',
  },
  middle_button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  checkBox_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remember_text: {
    color: '#7D7D82',
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
  },
  forgot_button_text: {
    color: '#161617',
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
  },
  button_view: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo_image: {
    width: 194,
    height: 159,
  },
});
