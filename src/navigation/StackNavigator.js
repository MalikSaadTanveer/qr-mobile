import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import navigationString from '../utils/navigationString';
import HomeScreen from '../screens/HomeScreen';
import QrScannerScreen from '../screens/QrScannerScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.splash} component={Splash} />
      <Stack.Screen name={navigationString.Home} component={HomeScreen} />
      <Stack.Screen
        name={navigationString.QrScannerScreen}
        component={QrScannerScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
