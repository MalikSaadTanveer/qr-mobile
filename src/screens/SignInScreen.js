import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import fonts from '../utils/fonts';
import TextInputWithLabel from '../component/TextInputWithLabel';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../component/CustomButton';
import navigationString from '../utils/navigationString';
const SignInScreen = ({navigation}) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSignIn = () => {
    // console.log('email', email);
    // console.log('password', password);
    navigation.replace(navigationString.Home);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={{alignItems: 'center'}}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{alignItems: 'center'}}>
        <StatusBar
          animated={true}
          backgroundColor={'#000000'}
          barStyle={'light-content'}
        />
        <View style={styles.image_view}>
          <Image source={require('../../assets/appLogo/logo.png')} />
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
            placeholder={'exmaple123@gmail.com'}
            value={email}
            setValue={setEmail}
          />
          <TextInputWithLabel
            label={'Password'}
            placeholder={'exmaple123@gmail.com'}
            isSecure={true}
            value={password}
            setValue={setPassword}
          />
          <View style={styles.middle_button_container}>
            <View style={styles.checkBox_View}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.remember_text}>Remember Me</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.forgot_button_text}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button_view}>
            <CustomButton title={'Sign In'} onPress={handelSignIn} />
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
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
    marginTop: 134,
    position: 'relative',
    alignItems: 'center',
  },
  input_container: {
    height: 353,
    width: '100%',
    // backgroundColor: 'yellow',
    backgroundColor: '#ffffff',
    marginTop: 30,
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
    // marginLeft:20
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
});
