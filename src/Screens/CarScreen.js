import React from 'react';
import {View, Pressable, SafeAreaView, StyleSheet} from 'react-native';

import {AppFonts} from '../Assets/Constants/Fonts';

import {useAppNavigation} from '../@types/AppNavigation';

import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';

const CarScreen = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('CarDetailScreen')}
        style={styles.pressable}>
        <View style={styles.textImageView}>
          <Animated.Text
            entering={FadeInLeft.delay(300)}
            sharedTransitionTag="carName"
            style={styles.carNameText}>
            Ford Mustang
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.delay(500)}
            sharedTransitionTag="carDetail"
            style={styles.carDescriptionText}>
            Muscle Car
          </Animated.Text>
          <Animated.Image
            entering={FadeInRight.delay(700)}
            sharedTransitionTag="carImage"
            resizeMode="contain"
            style={styles.carImage}
            source={require('../Assets/Images/car.png')}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default CarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
  },
  textImageView: {
    backgroundColor: 'gray',
    height: 200,
  },
  carNameText: {
    fontSize: 30,
    fontFamily: AppFonts.Bold,
    color: 'black',
    paddingTop: 20,
    paddingLeft: 10,
  },
  carDescriptionText: {
    fontSize: 20,
    fontFamily: AppFonts.Medium,
    color: 'black',
    paddingLeft: 10,
  },
  carImage: {
    height: 450,
    width: 450,
    position: 'absolute',
    top: -100,
    right: -150,
  },
});
