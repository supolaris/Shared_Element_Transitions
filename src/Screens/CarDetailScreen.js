import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import Animated from 'react-native-reanimated';

import {useAppNavigation} from '../@types/AppNavigation';

const CarDetailScreen = () => {
  const navigation = useAppNavigation();
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
            source={require('../Assets/Images/car.png')}
          />
        </View>
      </View>
      <View style={styles.pressableView}>
        <Pressable
          onPress={() => navigation.navigate('LocationScreen')}
          style={styles.pressable}>
          <Text style={styles.pressableText}>First Animation</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carNameText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Black',
    color: 'black',
    paddingTop: 20,
    paddingLeft: 10,
  },
  carDescriptionText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    paddingLeft: 10,
  },
  carImageView: {
    alignItems: 'center',
  },
  carImage: {
    height: 420,
    width: 420,
  },
  pressableView: {
    alignItems: 'center',
  },
  pressable: {
    backgroundColor: 'gray',
    width: '60%',
    borderRadius: 20,
    paddingVertical: 10,
  },
  pressableText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
