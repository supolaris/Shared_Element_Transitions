import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Pressable,
  FlatList,
} from 'react-native';

let arr1 = [
  {
    date: '2024-06-14',
    data: [
      {
        amount: 775,
        price: 665,
        tax: 55,
      },
    ],
  },
  {
    date: '2024-10-14',
    data: [
      {
        amount: 159,
        price: 4756,
        tax: 5895,
      },
    ],
  },
  {
    date: '2024-11-14',
    data: [
      {
        amount: 521,
        price: 463,
        tax: 9400,
      },
    ],
  },
  {
    date: '2024-10-14',
    data: [
      {
        amount: 568,
        price: 971,
        tax: 409,
      },
    ],
  },
  {
    date: '2024-11-14',
    data: [
      {
        amount: 891,
        price: 128,
        tax: 649,
      },
    ],
  },
  {
    date: '2024-11-14',
    data: [
      {
        amount: 782,
        price: 269,
        tax: 741,
      },
    ],
  },
];
const SectionListScreen = () => {
  useEffect(() => {
    sortData();
    console.log(arr1);
  }, []);

  const sortData = () => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i].date === arr1[j].date) {
          for (let k = 0; k < arr1[j].data.length; k++) {
            arr1[i].data.push(arr1[j].data[k]);
          }
          arr1.splice(j, 1);
          j--;
        }
      }
    }
  };

  const renderSection = ({section}) => (
    <View>
      <Text style={{fontSize: 25, color: 'black'}}>{section.date}</Text>
      <Text style={{fontSize: 20, color: 'black'}}>
        {section.data.map(item => (
          <Text key={item.index} style={{fontSize: 20, color: 'black'}}>
            {item.amount}
          </Text>
        ))}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <Text>SectionList</Text>
      <Pressable
        onPress={sortData}
        style={{backgroundColor: 'red'}}></Pressable>
      <View>
        <SectionList
          sections={arr1}
          renderItem={({item}) => <Text>hello</Text>}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={renderSection}
        />
      </View>
    </View>
  );
};

export default SectionListScreen;
