import React from 'react';
import {FlatList, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Person from './src/copy/Person';
import * as D from './src/data';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

const App = () => {
  return (
    <>
      <SafeAreaView style={[styles.flex]}>
        <FlatList
          data={people}
          renderItem={({item}) => <Person person={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeperator: {borderWidth: 1, borderColor: Colors.grey500},
});

export default App;
