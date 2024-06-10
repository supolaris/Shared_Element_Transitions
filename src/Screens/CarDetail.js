import {View, Text, Pressable} from 'react-native';
import React from 'react';

import Animated from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';

const CarDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Animated.Text
          sharedTransitionTag="carName"
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'black',
            paddingTop: 20,
            paddingLeft: 10,
          }}>
          Ford Mustang
        </Animated.Text>
        <Animated.Text
          sharedTransitionTag="carDetail"
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'black',
            paddingLeft: 10,
          }}>
          Muscle Car
        </Animated.Text>
        <View style={{alignItems: 'center'}}>
          <Animated.Image
            sharedTransitionTag="carImage"
            resizeMode="contain"
            style={{
              height: 420,
              width: 420,
            }}
            source={require('../Assets/Images/car.png')}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            backgroundColor: 'gray',
            width: '60%',
            borderRadius: 20,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            First Animation
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CarDetail;
