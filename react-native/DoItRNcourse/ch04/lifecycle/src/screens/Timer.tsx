import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

const Timer = () => {
  const title = 'Timer';
  return (
    <SafeAreaView style={[styles.flex]}>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
});

export default Timer;
