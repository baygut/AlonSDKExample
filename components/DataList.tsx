// DataList.tsx
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {HealthValue} from 'react-native-health';

interface DataListProps {
  data: HealthValue[];
}

const DataList: React.FC<DataListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id ?? ''}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.text}>ID: {item.id}</Text>
          <Text style={styles.text}>Start Date: {item.startDate}</Text>
          <Text style={styles.text}>End Date: {item.endDate}</Text>
          <Text style={styles.text}>Value: {item.value}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default DataList;
