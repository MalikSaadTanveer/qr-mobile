import {StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import navigationString from '../utils/navigationString';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace(navigationString.Home), 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require('../../assets/appLogo/logo.png')} />
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
});
