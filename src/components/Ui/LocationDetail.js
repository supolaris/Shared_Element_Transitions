import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {AppFonts} from '../../Assets/FontFamily/Fonts';
import {AppColors} from '../../Assets/Constants/Colors';

import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';

const LocationDetail = ({item, ...props}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <Animated.Image
            sharedTransitionTag={item.country}
            resizeMode="stretch"
            source={item.image}
            style={styles.locationImage}
          />
          <Animated.View
            entering={FadeInLeft.delay(300)}
            style={styles.countryCityView}>
            <Text style={styles.countryText}>{item.country}</Text>
            <Text style={styles.cityText}>{item.city}</Text>
          </Animated.View>
        </View>
        <View style={styles.logoTitleDescriptionView}>
          <View style={styles.logoDescriptionView}>
            <Animated.Image
              sharedTransitionTag="logoImage"
              style={styles.logoImage}
              source={require('../../Assets/Images/logo.png')}
            />

            <Animated.Text
              entering={FadeInLeft.delay(500)}
              style={styles.titleText}>
              Description
            </Animated.Text>
          </View>

          <Animated.Text
            entering={FadeInLeft.delay(700)}
            style={styles.descriptionText}>
            {item.description}
          </Animated.Text>
        </View>
      </View>

      <Animated.View entering={FadeIn.delay(1000)} style={{padding: 20}}>
        <TouchableOpacity
          onPress={props.onSecondAnimationPressed}
          style={styles.touchable}>
          <Text style={styles.touchableText}>Second Animation</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default LocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  outerView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
  },
  locationImage: {
    height: 300,
    width: '100%',
  },
  countryCityView: {
    paddingVertical: 15,
    paddingLeft: 15,
    width: '90%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: AppColors.TransparentBlack,
  },
  countryText: {
    fontSize: 30,
    color: AppColors.White,
  },
  cityText: {
    fontSize: 20,
    color: AppColors.White,
  },
  logoTitleDescriptionView: {
    flex: 1.5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: AppColors.White,
  },
  logoDescriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    height: 200,
    width: 200,
  },
  titleText: {
    fontSize: 25,
    color: AppColors.Black,
    fontFamily: AppFonts.BlackItalic,
    paddingTop: 20,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  descriptionText: {
    fontSize: 20,
    color: AppColors.Black,
    paddingTop: 20,
    fontFamily: AppFonts.SemiBold,
  },
  touchable: {
    backgroundColor: AppColors.DarkGreen,
    paddingVertical: 15,
    borderRadius: 20,
  },
  touchableText: {
    fontSize: 25,
    fontFamily: AppFonts.Bold,
    color: AppColors.White,
    textAlign: 'center',
  },
});
