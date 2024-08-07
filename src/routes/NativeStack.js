import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import StartupScreen from '../Screens/StartupScreen';
import SectionListScreen from '../Screens/SectionList';

import LocationScreen from '../Screens/LocationScreen';
import LocationDetailScreen from '../Screens/LocationDetailScreen';

import CarScreen from '../Screens/CarScreen';
import CarDetailScreen from '../Screens/CarDetailScreen';

import AnimationScreen from '../Screens/AnimationScreen';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        {/* <Stack.Screen name="StartupScreen" component={StartupScreen} /> */}
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen
          name="LocationDetailScreen"
          component={LocationDetailScreen}
        />
        <Stack.Screen name="CarScreen" component={CarScreen} />
        <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
