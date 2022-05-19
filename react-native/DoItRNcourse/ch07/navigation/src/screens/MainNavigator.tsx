import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useToggleTheme} from '../contexts';
import {Switch} from 'react-native-paper';

export default function MainNavigator() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <SafeAreaView style={[styles.view]}>
      <View style={[styles.view, {backgroundColor: theme.colors.background}]}>
        <View style={[styles.topBar, {backgroundColor: theme.colors.primary}]}>
          <Switch value={theme.dark} onValueChange={toggleTheme} />
        </View>
        <View style={[styles.view]}>
          <Text style={[styles.text, {color: theme.colors.text}]}>
            This is Top text.
          </Text>
          <Text style={[styles.text, {color: theme.colors.text}]}>
            This is Bottom text.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
  flex: {flex: 1},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-end',
  },
  text: {fontSize: 20},
});
