import React, {useState, useCallback, useRef, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {Text, View, StyleSheet, Switch, FlatList} from 'react-native';
import {useToggleTheme} from '../contexts';
import * as D from '../data';
import Person from './Person';

const People = () => {
  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);

  const addPerson = useCallback(() => {
    setPeople(people => [...people, D.createRandomPerson()]);
  }, []);
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => []);
  }, []);

  const deletePerson = useCallback(() => {
    setPeople(notUsed => []);
  }, []);

  useEffect(() => D.makeArray(5).forEach(addPerson), []);
  return (
    <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: theme.colors.accent}]}>
        <Text onPress={add} style={styles.text}>
          add
        </Text>
        <Text onPress={removeAll} style={styles.text}>
          remove all
        </Text>
        <View style={{flex: 1}} />
        <Switch value={theme.dark} onValueChange={toggleTheme} />
      </View>
      <FlatList
        ref={flatListRef}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={item => item.id}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20},
});

export default People;
