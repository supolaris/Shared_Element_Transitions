import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

import StartupScreen from '../Screens/StartupScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

import CarScreen from '../Screens/CarScreen';
import CarDetail from '../Screens/CarDetail';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CarScreen" component={CarScreen} />
        <Stack.Screen name="CarDetail" component={CarDetail} />

        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="StartupScreen" component={StartupScreen} />

        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
