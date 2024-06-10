import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Animated, {FadeIn, FadeInLeft, FadeOut} from 'react-native-reanimated';

const DetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={{flex: 1}}>
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
              top: '55%',
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

      <Animated.View entering={FadeIn.delay(1000)} style={{padding: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1A4D2E',
            paddingVertical: 15,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
            }}>
            Select Destination
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default DetailScreen;
