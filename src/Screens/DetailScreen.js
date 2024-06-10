import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Animated, {FadeInLeft} from 'react-native-reanimated';

const DetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={{flex: 3}}>
        <View style={{flex: 1}}>
          <Animated.Image
            sharedTransitionTag={item.country}
            resizeMode="cover"
            source={item.image}
            style={{height: 300, width: '100%'}}
          />
          <Animated.View
            entering={FadeInLeft.delay(300)}
            style={{
              paddingVertical: 15,
              paddingLeft: 15,
              width: '90%',
              borderRadius: 10,
              position: 'absolute',
              top: '60%',
              left: '5%',
              backgroundColor: 'rgba(0,0,0,0.7)',
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>{item.country}</Text>
            <Text style={{fontSize: 20, color: 'white'}}>{item.city}</Text>
          </Animated.View>
        </View>
        <View
          style={{
            flex: 1.5,
            paddingHorizontal: 15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#ffffff',
          }}>
          <Animated.Text
            entering={FadeInLeft.delay(500)}
            style={{
              fontSize: 40,
              color: 'black',
              fontWeight: 'bold',
              paddingTop: 20,
              paddingBottom: 5,
              borderBottomWidth: 0.5,
            }}>
            Description
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.delay(700)}
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {item.description}
          </Animated.Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
