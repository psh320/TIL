import React from 'react';
import type {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';

export type CountryProps = {
  country: D.ICountry;
};

const Country: FC<CountryProps> = ({country}) => {
  const {name, population, subregion, region} = country;

  return (
    <View style={[styles.view]}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Text>population: {population}</Text>
        <Text>subregion: {subregion}</Text>
        <Text>region: {region}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {padding: 5},
  name: {fontSize: 30, fontWeight: '400'},
});

export default Country;
