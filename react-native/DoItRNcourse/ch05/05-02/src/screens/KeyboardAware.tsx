import React, {useCallback, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TextInput,
  Keyboard,
} from 'react-native';
import {findNodeHandle} from 'react-native';
import type {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {Colors} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {useToggleTheme} from '../contexts';
import * as D from '../data';
const KeyboardAvoid = () => {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const {dark, colors} = useTheme();
  const toggleTheme = useToggleTheme();
  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(() => textInputRef.current?.focus(), []);

  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);
  const scrollToInput = (reactNode: any) => {
    scrollViewRef.current?.scrollToFocusedInput(reactNode);
  };
  const autoFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) =>
    scrollToInput(findNodeHandle(event.target));

  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.textButton]} onPress={setFocus}>
          focus
        </Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>
          dismiss keyboard
        </Text>
        <View style={[styles.flex]} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        contentContainerStyle={[styles.flex]}>
        <View style={[styles.flex]} />
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.text}]}>email</Text>
          <TextInput
            ref={textInputRef}
            onFocus={autoFocus}
            style={[
              styles.textInput,
              {color: colors.text, borderColor: colors.placeholder},
            ]}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.text}]}>name</Text>
          <TextInput
            ref={textInputRef}
            onFocus={autoFocus}
            style={[
              styles.textInput,
              {color: colors.text, borderColor: colors.placeholder},
            ]}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({...person, name}))}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  flex: {flex: 1},
});

export default KeyboardAvoid;
