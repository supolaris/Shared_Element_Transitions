import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';

const CarScreen = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CarDetail')}
      style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: 'gray',
          height: 200,
        }}>
        <Animated.Text
          entering={FadeInLeft.delay(300)}
          sharedTransitionTag="carName"
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
            paddingTop: 20,
            paddingLeft: 10,
          }}>
          Ford Mustang
        </Animated.Text>
        <Animated.Text
          entering={FadeInLeft.delay(500)}
          sharedTransitionTag="carDetail"
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            paddingLeft: 10,
          }}>
          Muscle Car
        </Animated.Text>
        <Animated.Image
          entering={FadeInRight.delay(700)}
          sharedTransitionTag="carImage"
          resizeMode="contain"
          style={{
            height: 450,
            width: 450,
            position: 'absolute',
            top: -100,
            right: -150,
          }}
          source={require('../Assets/Images/car.png')}
        />
      </View>
    </Pressable>
  );
};

export default CarScreen;
