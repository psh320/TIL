import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, Switch, FlatList} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './PersonDrag';

const People = () => {
  const [scrollEnabled] = useScrollEnabled();

  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const addPerson = useCallback(() => {
    setPeople(people => [D.createRandomPerson(), ...people]);
  }, []);
  const removeAllPersons = useCallback(() => {
    setPeople(notUsed => []);
  }, []);
  const deletePerson = useCallback((id: string) => {
    setPeople(people => people.filter(person => person.id !== id));
  }, []);

  useEffect(addPerson, []);

  return (
    <ScrollEnabledProvider>
      <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
        <View style={[styles.topBar, {backgroundColor: theme.colors.accent}]}>
          <Text onPress={addPerson} style={styles.text}>
            add
          </Text>
          <Text onPress={removeAllPersons} style={styles.text}>
            remove all
          </Text>
          <View style={{flex: 1}} />
          <Switch value={theme.dark} onValueChange={toggleTheme} />
        </View>
        <FlatList
          scrollEnabled={false}
          data={people}
          renderItem={({item}) => (
            <Person person={item} deletePressed={() => deletePerson(item.id)} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollEnabledProvider>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20},
});

export default People;
