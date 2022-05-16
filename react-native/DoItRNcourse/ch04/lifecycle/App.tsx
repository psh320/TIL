import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LifeCycle from './src/screens/LifeCycle';
import Timer from './src/screens/Timer';
import Interval from './src/screens/Interval';
import Fetch from './src/screens/Fetch';
import {Colors} from 'react-native-paper';

export default function App() {
  const selects = useMemo(
    () => ['lifeCycle', 'timer', 'interval', 'fetch'],
    [],
  );
  const [select, setSelect] = useState<string>(selects[0]);
  const onPress = useCallback(text => () => setSelect(text), []);
  const buttons = useMemo(
    () =>
      selects.map(text => (
        <Text key={text} onPress={onPress(text)} style={styles.button}>
          {text}
        </Text>
      )),
    [],
  );

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.topBar}>{buttons}</View>
      {select === 'lifeCycle' && <LifeCycle />}
      {select === 'timer' && <Timer />}
      {select === 'interval' && <Interval />}
      {select === 'fetch' && <Fetch />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  topBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.lightBlue500,
  },
  button: {fontSize: 20, color: 'white'},
});
