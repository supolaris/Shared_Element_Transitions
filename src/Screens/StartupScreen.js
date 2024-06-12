import {View, Text} from 'react-native';
import React from 'react';

import Startup from '../components/Ui/Startup';

import {useNavigation} from '@react-navigation/native';

const StartupScreen = () => {
  const navigation = useNavigation();

  const onGetStarted = () => {
    navigation.navigate('LocationScreen');
  };
  return <Startup onGetStarted={onGetStarted} />;
};

export default StartupScreen;
