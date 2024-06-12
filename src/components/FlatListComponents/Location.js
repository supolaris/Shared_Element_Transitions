import React from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {AppFonts} from '../../Assets/FontFamily/Fonts';
import {AppColors} from '../../Assets/Constants/Colors';

import {HomeFlatList} from './HomeFlatList';
import Animated, {FadeInUp} from 'react-native-reanimated';

const Location = props => {
  const RenderHomeFlatList = ({item, index}) => {
    return (
      <Animated.View entering={FadeInUp.delay(200 * index)}>
        <TouchableOpacity
          onPress={() => props.onLocationSelectNavigation(item)}
          style={styles.flatListTouchable}>
          <View style={styles.flatListMainView}>
            <Animated.Image
              sharedTransitionTag={item.country}
              style={styles.flatListImage}
              source={item.image}
            />
            <View style={styles.flatListNameCityView}>
              <Text style={styles.flatListCountryText}>{item.country}</Text>
              <Text style={styles.flatListCityText}>{item.city}</Text>
              <Text numberOfLines={1} style={styles.flatListDescriptionText}>
                {item.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.headerView}>
        <Animated.Image
          sharedTransitionTag="logoImage"
          style={styles.logoImage}
          source={require('../../Assets/Images/logo.png')}
        />

        <Text style={styles.headerText}>Discover Destinations</Text>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={HomeFlatList}
          renderItem={RenderHomeFlatList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  flatListTouchable: {
    margin: 10,
    elevation: 15,
    shadowColor: AppColors.DarkGreen,
    backgroundColor: AppColors.White,
    padding: 15,
    borderRadius: 10,
  },
  flatListMainView: {
    flexDirection: 'row',
  },
  flatListImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  flatListNameCityView: {
    paddingLeft: 10,
  },
  flatListCountryText: {
    fontSize: 22,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  flatListCityText: {
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
  flatListDescriptionText: {
    fontSize: 16,
    color: AppColors.Black,
    width: '18%',
    fontFamily: AppFonts.Regular,
  },

  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoImage: {
    height: 80,
    width: 80,
  },
  headerText: {
    flex: 1,
    width: '50%',
    fontSize: 23,
    fontFamily: AppFonts.BlackItalic,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  flatListView: {
    flex: 1,
    paddingVertical: 10,
  },
});
