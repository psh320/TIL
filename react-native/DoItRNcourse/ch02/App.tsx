import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, Alert, TouchableOpacity, Text, TouchableHighlight, TextInput } from 'react-native';
import * as D from './src/data';

const onPress = () => Alert.alert('home pressed', 'message')

const person = D.createRandomPerson()
export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Home' onPress={onPress}/>
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
      <Text onPress={onPress}>Press Me</Text>

      <TextInput 
      placeholder='Enter your name' 
      onChangeText={(text:string) => console.log(text)}
      onFocus={() => console.log('OnFocus')}
      onBlur={() => console.log("OnBlur")}
      onEndEditing={()=>console.log('onEndEditing')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
