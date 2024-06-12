import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {AppFonts} from '../Assets/Constants/Fonts';
import {AppColors} from '../Assets/Constants/Colors';

import Video from 'react-native-video';

import Animated, {FadeInUp} from 'react-native-reanimated';

import {useAppNavigation} from '../@types/AppNavigation';

const StartupScreen = () => {
  const background = require('../Assets/Videos/StartUpVideo.mp4');

  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Video
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        source={background}
      />
      <View style={styles.infoOuterView}>
        <View style={styles.infoInnerView}>
          <View>
            <Animated.Text
              entering={FadeInUp.delay(300)}
              style={styles.descriptionText}>
              Discover your exciting adventure around the world with ExploreEase
            </Animated.Text>
            <Animated.Text
              entering={FadeInUp.delay(300)}
              style={styles.subDescriptionText}>
              Many attractive promos awaits you
            </Animated.Text>
          </View>

          <Animated.View
            entering={FadeInUp.delay(500)}
            style={styles.buttonAnimatedView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LocationScreen')}
              style={styles.touchable}>
              <Text style={styles.touchableText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  infoOuterView: {
    flex: 1,
  },
  infoInnerView: {
    paddingTop: 20,
    backgroundColor: AppColors.White,
    height: '35%',
    margin: 10,
    marginTop: 35,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: AppFonts.Bold,

    fontSize: 25,
    color: AppColors.DarkGreen,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  subDescriptionText: {
    textAlign: 'center',
    fontFamily: AppFonts.Bold,
    fontSize: 18,
    color: AppColors.DarkGreen,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  buttonAnimatedView: {
    padding: 20,
  },
  touchable: {
    backgroundColor: AppColors.DarkGreen,
    paddingVertical: 10,
    borderRadius: 20,
  },
  touchableText: {
    fontSize: 25,
    fontFamily: AppFonts.Bold,
    color: AppColors.White,
    textAlign: 'center',
  },
});
