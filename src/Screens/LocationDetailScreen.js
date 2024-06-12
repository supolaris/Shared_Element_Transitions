import React from 'react';

import LocationDetail from '../components/Ui/LocationDetail';

import {useNavigation} from '@react-navigation/native';

const LocationDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;

  const onSecondAnimationPressed = () => {
    navigation.navigate('CarScreen');
  };

  return (
    <LocationDetail
      item={item}
      onSecondAnimationPressed={onSecondAnimationPressed}
    />
  );
};

export default LocationDetailScreen;
