import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Animated.Image
        source={{uri: 'https://picsum.photos/id/39/200'}}
        style={{width: 300, height: 300}}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Animated.Image
        source={{uri: 'https://picsum.photos/id/39/200'}}
        style={{width: 100, height: 100}}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

export default function Screen3() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
