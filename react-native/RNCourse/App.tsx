import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as D from './src/data';

const person = D.createRandomPerson()
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(person, null,2)}</Text>
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
