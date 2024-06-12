import {View, Text} from 'react-native';
import React from 'react';

import Car from '../components/Ui/Car';

import {useNavigation} from '@react-navigation/native';

export default function CarScreen() {
  const navigation = useNavigation();

  const onCarDetailPressed = () => {
    navigation.navigate('CarDetailScreen');
  };

  return <Car onCarDetailPressed={onCarDetailPressed} />;
}
