import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Colors} from 'react-native-paper';
import {useLayout} from '../hooks';

const LifeCycle = () => {
  const [layout, setLayout] = useLayout();

  return (
    <View onLayout={setLayout} style={[styles.view]}>
      <Text style={[styles.title]}>LifeCycle</Text>
      <Text>Layout: {JSON.stringify(layout, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
});

export default LifeCycle;
