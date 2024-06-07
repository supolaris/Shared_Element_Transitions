import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Animated.View
        style={{
          width: '80%',
          height: 100,
          backgroundColor: 'green',
          marginBottom: 20,
        }}
        sharedTransitionTag="sharedTagg">
        {/* <TouchableOpacity
          sharedTransitionTag="sharedTaggT"
          style={{width: '80%', backgroundColor: 'yellow', height: 50}}>
          <Button title="Hello " />
        </TouchableOpacity> */}
        <Animated.Text
          sharedTransitionTag="sharedTextTag"
          style={{fontSize: 20, color: 'white'}}>
          New World
        </Animated.Text>
      </Animated.View>
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default Screen2;
