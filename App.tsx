import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {MenuProvider} from 'react-native-popup-menu';
const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
