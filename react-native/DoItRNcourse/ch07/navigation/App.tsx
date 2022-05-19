import React, {useCallback, useState} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

import {ToggleThemeProvider} from './src//contexts';
import MainNavigator from './src/screens/MainNavigator';

enableScreens();

export default function App() {
  const scheme = useColorScheme(); //dark or light
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(() => {
    setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme));
  }, []);

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  );
}
