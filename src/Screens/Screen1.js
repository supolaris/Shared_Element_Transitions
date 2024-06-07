import * as React from 'react';
import {View, Button, Pressable, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-svg';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Animated.View
        style={{
          width: '60%',
          height: 100,
          backgroundColor: 'red',
          marginBottom: 20,
        }}
        sharedTransitionTag="sharedTagg">
        {/* <TouchableOpacity
          sharedTransitionTag="sharedTaggT"
          style={{backgroundColor: 'yellow', height: 50, width: '80%'}}>
          <Button title="Hello world " />
        </TouchableOpacity> */}
        <Animated.Text
          sharedTransitionTag="sharedTextTag"
          style={{fontSize: 40, color: 'white'}}>
          Hello world
        </Animated.Text>
      </Animated.View>
      <Button title="Screen1" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;
