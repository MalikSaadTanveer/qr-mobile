import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import navigationString from '../utils/navigationString';
import HomeScreen from '../screens/HomeScreen';
import QrScannerScreen from '../screens/QrScannerScreen';
import ViewSpendingHours from '../screens/ViewSpendingHours';
import SignInScreen from '../screens/SignInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MemberShipDetailView from '../screens/MemberShipDetailView';
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
      <Stack.Screen
        name={navigationString.ViewSpendingHours}
        component={ViewSpendingHours}
      />
      <Stack.Screen
        name={navigationString.SignInScreen}
        component={SignInScreen}
      />
      <Stack.Screen
        name={navigationString.ProfileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={navigationString.MemberShipDetailView}
        component={MemberShipDetailView}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
