import React from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';

import {HomeFlatList} from '../components/FlatListComponents/HomeFlatList';
import Animated, {FadeInDown} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const RenderHomeFlatList = ({item, index}) => {
    return (
      <Animated.View entering={FadeInDown.delay(200 * index)}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreen', {item: item});
          }}
          style={{
            margin: 10,
            elevation: 10,
            shadowColor: 'blue',
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Animated.Image
              sharedTransitionTag={item.country}
              style={{height: 100, width: 100, borderRadius: 10}}
              source={item.image}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 30, color: 'black', fontWeight: '600'}}>
                {item.country}
              </Text>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
                {item.city}
              </Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: 'black', width: '20%'}}>
                {item.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          paddingVertical: 20,
          backgroundColor: 'white',
        }}>
        Discover Destinations
      </Text>
      <View style={{flex: 1, paddingVertical: 10}}>
        <FlatList
          data={HomeFlatList}
          renderItem={RenderHomeFlatList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
