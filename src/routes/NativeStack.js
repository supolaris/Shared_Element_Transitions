import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
