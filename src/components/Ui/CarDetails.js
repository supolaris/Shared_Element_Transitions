import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import {AppFonts} from '../../Assets/FontFamily/Fonts';
import {AppColors} from '../../Assets/Constants/Colors';

import Animated from 'react-native-reanimated';

const CarDetail = () => {
  return (
    <View style={styles.container}>
      <View>
        <Animated.Text sharedTransitionTag="carName" style={styles.carNameText}>
          Ford Mustang
        </Animated.Text>
        <Animated.Text
          sharedTransitionTag="carDetail"
          style={styles.carDescriptionText}>
          Muscle Car
        </Animated.Text>
        <View style={styles.carImageView}>
          <Animated.Image
            sharedTransitionTag="carImage"
            resizeMode="contain"
            style={styles.carImage}
            source={require('../../Assets/Images/car.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default CarDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  carNameText: {
    fontSize: 20,
    fontFamily: AppFonts.Black,
    color: AppColors.Black,
    paddingTop: 20,
    paddingLeft: 10,
  },
  carDescriptionText: {
    fontSize: 16,
    fontFamily: AppFonts.Medium,
    color: AppColors.Black,
    paddingLeft: 10,
  },
  carImageView: {
    alignItems: 'center',
  },
  carImage: {
    height: 420,
    width: 420,
  },
});
