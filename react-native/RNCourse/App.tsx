import { StatusBar } from 'expo-status-bar';
import React from 'react';
// prettier-ignore
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { Colors } from "react-native-paper";

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>OS: {Platform.OS}</Text>
      <Text style={[styles.text]}>Width: {width}</Text>
      <Text style={[styles.text]}>Height: {height}</Text>
    </View>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  view: {backgroundColor: Colors.blue500, height: height},
  text: {fontSize:20, color:Colors.blue200, width: width},
});
