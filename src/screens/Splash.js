import {StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import navigationString from '../utils/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
  useEffect(() => {
    handleUserFlow();
  }, []);

  const handleUserFlow = async () => {
    setTimeout(() => {
      navigation.replace(navigationString.QrScannerScreen);
    }, 2000);
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
