import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {MenuProvider} from 'react-native-popup-menu';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer theme={MyTheme}>
        <StackNavigator />
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
