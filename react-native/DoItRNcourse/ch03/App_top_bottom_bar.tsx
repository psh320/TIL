import React from 'react';
import {Alert, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomBar from './src/screens/BottomBar';
import Content from './src/screens/Content';
import TopBar from './src/screens/TopBar';

const App = () => {
  const iconPressed = () => Alert.alert('Icon Pressed.');
  return (
    <>
      <SafeAreaView style={[styles.flex]}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={iconPressed} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35,
  },
});

export default App;
