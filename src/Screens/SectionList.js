import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';

let arr1 = [
  {
    date: '2024-06-14',
    data: [
      {
        quantity: 775,
        price: 665,
        tax: 55,
        discount: 10,
      },
    ],
  },
  {
    date: '2024-10-14',
    data: [
      {
        quantity: 159,
        price: 4756,
        tax: 5895,
        discount: 50,
      },
      {
        quantity: 568,
        price: 971,
        tax: 409,
        discount: 20,
      },
    ],
  },
  {
    date: '2024-11-14',
    data: [
      {
        quantity: 521,
        price: 463,
        tax: 9400,
        discount: 15,
      },
      {
        quantity: 891,
        price: 128,
        tax: 649,
        discount: 5,
      },
      {
        quantity: 782,
        price: 269,
        tax: 741,
        discount: 30,
      },
    ],
  },
  {
    date: '2024-12-01',
    data: [
      {
        quantity: 300,
        price: 1500,
        tax: 300,
        discount: 25,
      },
    ],
  },
  {
    date: '2025-01-20',
    data: [
      {
        quantity: 200,
        price: 800,
        tax: 120,
        discount: 10,
      },
      {
        quantity: 350,
        price: 2300,
        tax: 460,
        discount: 20,
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

  const renderSectionHeader = ({section}) => {
    return (
      <View style={styles.renderSectionHeaderView}>
        <Text style={styles.dateText}>
          <Text style={styles.valueTitleText}>Title:</Text> {section.date}
        </Text>
      </View>
    );
  };

  const renderSection = ({item}) => {
    return (
      <View style={styles.renderSectionView}>
        <Text style={styles.valueText}>
          <Text style={styles.valueTitleText}>Quantity:</Text> {item.quantity}
        </Text>
        <Text style={styles.valueText}>
          <Text style={styles.valueTitleText}>Price:</Text> {item.price}
        </Text>
        <Text style={styles.valueText}>
          <Text style={styles.valueTitleText}>Discount:</Text> {item.discount}
        </Text>
        <Text style={styles.valueText}>
          <Text style={styles.valueTitleText}>Tax:</Text> {item.tax}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionListView}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={sectionListData}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderSection}
          keyExtractor={(item, index) => index.toString()}
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
    paddingHorizontal: 10,
  },
  sectionListView: {},

  renderSectionHeaderView: {
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#55AD9B',
    backgroundColor: '#FFDE95',
  },
  dateText: {
    fontSize: 22,
    color: 'black',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  detailView: {
    backgroundColor: 'green',
  },
  renderSectionView: {
    backgroundColor: '#55AD9B',
    marginVertical: 3,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  valueText: {
    fontSize: 22,
    color: 'white',
  },
  valueTitleText: {
    color: 'black',
    fontWeight: '500',
  },
});
