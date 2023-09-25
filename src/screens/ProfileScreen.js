import {StyleSheet, Text, SafeAreaView, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import HeaderWithLeftButton from '../component/HeaderWithLeftButton';
import ImagePicker from '../component/ImagePicker';
import DoubleTextInputWithLabel from '../component/DoubleTextInputWithLabel';
import TextInputWithLabel from '../component/TextInputWithLabel';
import CustomButton from '../component/CustomButton';

const ProfileScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Wick');
  const [email, setEmail] = useState('example@gmail.com');
  const [phone, setPhone] = useState('300000000');
  const [address, setAddress] = useState('example');
  const [photo, setPhoto] = useState(null);
  const handelUpdate = () => {
    console.log('Update Pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'#F6F6F6'}
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
      />

      <HeaderWithLeftButton
        title={'Profile'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.profile_view}>
        <ImagePicker photo={photo} setPhoto={setPhoto} />
      </View>
      <View style={styles.info_view}>
        <DoubleTextInputWithLabel
          firstLabel={'First Name'}
          firstValue={firstName}
          setFirstValue={setFirstName}
          lastLabel={'Last Name'}
          lastValue={lastName}
          setLastValue={setLastName}
        />
        <TextInputWithLabel
          label={'Email Address'}
          value={email}
          setValue={setEmail}
        />
        <TextInputWithLabel
          label={'Phone Number'}
          value={phone}
          setValue={setPhone}
        />
        <TextInputWithLabel
          label={'Address'}
          value={address}
          setValue={setAddress}
        />
        <View style={styles.update_button_view}>
          <CustomButton title={'Update'} onPress={handelUpdate} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profile_view: {
    marginTop: 20,
  },
  info_view: {
    width: '100%',
    height: 490,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 30,
  },
  update_button_view: {
    alignItems: 'center',
    marginTop: 20,
  },
});
