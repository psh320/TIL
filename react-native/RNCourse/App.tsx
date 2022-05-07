import { StatusBar } from 'expo-status-bar';
import React from 'react';
// prettier-ignore
import { StyleSheet, View, Text, Dimensions, Platform, ImageBackground, Image } from 'react-native';
import { Colors } from "react-native-paper";
import * as D from "./src/data";

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

export default function App() {
  return (
    <View style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/bg.jpg')}
      >
        <Image source={{uri:avatarUrl}} style={[styles.image]} />
      </ImageBackground>
    </View>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  flex:{flex: 1},
  imageBackground:{padding: 10},
  image:{width: avatarSize, height: avatarSize, borderRadius: avatarSize/2}
});
