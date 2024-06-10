import React from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';

import {HomeFlatList} from '../components/FlatListComponents/HomeFlatList';
import Animated, {FadeInUp} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
  const navigation = useNavigation();

  const RenderHomeFlatList = ({item, index}) => {
    return (
      <Animated.View entering={FadeInUp.delay(200 * index)}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreen', {item: item});
          }}
          style={{
            margin: 10,
            elevation: 15,
            shadowColor: '#1A4D2E',
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
              <Text
                style={{
                  fontSize: hp('3%'),
                  color: 'black',
                  fontFamily: 'Montserrat-Bold',
                }}>
                {item.country}
              </Text>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {item.city}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: hp('2.2%'),
                  color: 'black',
                  width: '18%',
                  fontFamily: 'Montserrat-Regular',
                }}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Animated.Image
          sharedTransitionTag="logoImage"
          style={{
            width: '50%',
            height: 80,
            width: 80,
          }}
          source={require('../Assets/Images/logo.png')}
        />

        <Text
          style={{
            flex: 1,
            width: '50%',
            fontSize: hp('3%'),
            fontFamily: 'Montserrat-BlackItalic',
            color: 'black',
            textAlign: 'center',
            paddingVertical: 20,
          }}>
          Discover Destinations
        </Text>
      </View>
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
