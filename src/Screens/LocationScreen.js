import {View, Text} from 'react-native';
import React from 'react';

import Location from '../components/FlatListComponents/Location';

import {HomeFlatList} from '../components/FlatListComponents/HomeFlatList';

import {useNavigation} from '@react-navigation/native';

const LocationScreen = () => {
  const navigation = useNavigation();

  const onLocationSelectNavigation = item => {
    navigation.navigate('LocationDetailScreen', {item: item});
  };

  return <Location onLocationSelectNavigation={onLocationSelectNavigation} />;
};

export default LocationScreen;
