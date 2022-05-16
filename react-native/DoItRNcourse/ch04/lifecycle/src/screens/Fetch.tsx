import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Colors} from 'react-native-paper';
import Country from './Country';
import * as D from '../data';

const Fetch = () => {
  const [countries, setCountries] = useState<D.ICountry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    D.getCountries().then(setCountries).catch(setError);
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fetch</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.lightBlue100},
  title: {fontSize: 30, fontWeight: '600'},
  separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1},
});

export default Fetch;
