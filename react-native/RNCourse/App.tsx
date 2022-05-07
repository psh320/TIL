import { StatusBar } from 'expo-status-bar';
import React from 'react';
// prettier-ignore
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { Colors } from "react-native-paper";

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <View style={[styles.flex]}>
    </View>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  flex:{flex: 1}
});
