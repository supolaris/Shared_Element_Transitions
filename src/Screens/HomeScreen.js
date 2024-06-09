import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';

import {HomeFlatList} from '../components/FlatListComponents/HomeFlatList';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';

const HomeScreen = () => {
  const RenderHomeFlatList = ({item, index}) => {
    return (
      <Animated.View entering={FadeInDown.delay(200 * index)}>
        <Pressable
          style={{
            margin: 10,
            elevation: 10,
            shadowColor: 'blue',
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
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
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={{flex: 1}}>
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
      <View style={{flex: 1}}>
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
