import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';

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
      <PaperProvider theme={DarkTheme}>
        <SafeAreaView style={styles.SafeAreaView}>
          <MainNavigator />
        </SafeAreaView>
      </PaperProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
});
