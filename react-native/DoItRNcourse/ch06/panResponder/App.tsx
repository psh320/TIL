import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';
import {ToggleThemeProvider} from './src/contexts';

import Commuicons from 'react-native-vector-icons/MaterialCommunityIcons';

Commuicons.loadFont();

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(
    () => setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme)),
    [],
  );
  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={styles.SafeAreaView}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
});
