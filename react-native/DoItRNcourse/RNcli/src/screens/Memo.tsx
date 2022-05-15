import React, {useMemo} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import Person from './Person';
import {useClock} from '../hooks';

const title = 'Memo';
const Memo = () => {
  const time = useClock();
  const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), []);

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        style={[styles.flatList]}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeperator: {
    borderWidth: 1,
    borderColor: Colors.grey500,
  },
});

export default Memo;
