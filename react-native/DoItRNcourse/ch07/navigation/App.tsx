import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNavigator from './src/screens/MainNavigator';

enableScreens();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
