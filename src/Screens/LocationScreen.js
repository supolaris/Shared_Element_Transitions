import React from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {HomeFlatList} from '../components/FlatListComponents/HomeFlatList';
import Animated, {FadeInUp} from 'react-native-reanimated';

import {useAppNavigation} from '../@types/AppNavigation';

const LocationScreen = () => {
  const navigation = useAppNavigation();

  const RenderHomeFlatList = ({item, index}) => {
    return (
      <Animated.View entering={FadeInUp.delay(200 * index)}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LocationDetailScreen', {item: item});
          }}
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
          source={require('../Assets/Images/logo.png')}
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

export default LocationScreen;

const styles = StyleSheet.create({
  flatListTouchable: {
    margin: 10,
    elevation: 15,
    shadowColor: '#1A4D2E',
    backgroundColor: 'white',
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
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  flatListCityText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  flatListDescriptionText: {
    fontSize: 16,
    color: 'black',
    width: '18%',
    fontFamily: 'Montserrat-Regular',
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
    fontFamily: 'Montserrat-BlackItalic',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  flatListView: {
    flex: 1,
    paddingVertical: 10,
  },
});
