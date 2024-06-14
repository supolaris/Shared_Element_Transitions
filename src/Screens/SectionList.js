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
  const [sectionListData, setSectionListData] = useState([]);

  useEffect(() => {
    sortData();
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
    setSectionListData(arr1);
  };

  const renderSection = ({section}) => (
    <View style={styles.renderSectionView}>
      <Text style={styles.dateText}>{section.date}</Text>

      <View style={styles.detailView}>
        {section.data.map(item => (
          <Text style={{fontSize: 20, color: 'black'}}>
            Amount: {item.amount}
            {'\n'}
            Price: {item.price}
            {'\n'}
            Tax: {item.tax}
            {'\n'}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.sectionListView}>
        <SectionList
          sections={sectionListData}
          renderItem={({item}) => <Text>{item.date}kdfslkfl</Text>}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={renderSection}
        />
      </View>
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionListView: {
    flex: 1,
    paddingTop: 40,
  },

  renderSectionView: {
    flex: 1,
  },
  dateText: {
    backgroundColor: 'gray',
    fontSize: 25,
    color: 'red',
  },
  detailView: {
    backgroundColor: 'green',
    // marginTop: 10,
    //paddingVertical: 20,
  },
});
