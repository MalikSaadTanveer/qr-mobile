import {StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import navigationString from '../utils/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
  useEffect(() => {
    handleUserFlow();
  }, []);

  const handleUserFlow = async () => {
    const userId = await AsyncStorage.getItem('userId');
    // console.log('userId',userId)
    setTimeout(() => {
      if (userId) {
        navigation.replace(navigationString.Home);
      } else {
        navigation.replace(navigationString.SignInScreen);
      }
    }, 2000);
    // if (userId) {
    //   navigation.replace(navigationString.Home);
    // } else {
    //   navigation.replace(navigationString.SignInScreen);
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require('../../assets/appLogo/logo.png')}
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 194,
    height: 159,
  },
});
