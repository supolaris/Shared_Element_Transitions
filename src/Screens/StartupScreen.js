import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import Video from 'react-native-video';

import Animated, {FadeInUp} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';

const StartupScreen = () => {
  const background = require('../Assets/Videos/StartUpVideo.mp4');

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {/* <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      /> */}
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Video
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        resizeMode="cover"
        repeat={true}
        source={background}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            paddingTop: 20,
            backgroundColor: '#ffffff',
            height: '35%',
            margin: 10,
            marginTop: 35,
            borderRadius: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Animated.Text
              entering={FadeInUp.delay(300)}
              style={{
                textAlign: 'center',
                fontWeight: '900',
                fontSize: 25,
                color: '#1A4D2E',
                paddingHorizontal: 10,
                paddingBottom: 10,
                borderBottomWidth: 0.5,
              }}>
              Discover your exciting adventure around the world with ExploreEase
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(300)}
              style={{
                textAlign: 'center',
                fontWeight: '900',
                fontSize: 18,
                color: '#1A4D2E',
                paddingTop: 10,

                paddingHorizontal: 10,
              }}>
              Many attractive promos awaits you
            </Animated.Text>
          </View>

          <Animated.View entering={FadeInUp.delay(500)} style={{padding: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={{
                backgroundColor: '#1A4D2E',
                paddingVertical: 10,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default StartupScreen;
