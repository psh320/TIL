import React, {useState} from 'react';
import {StyleSheet, Keyboard, Platform, Dimensions, Alert} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  UnderlineText,
  TouchableView,
  TopBar,
  MaterialCommunityIcon as Icon,
} from '../theme/navigation';
import * as D from '../data';
import {useAutoFocus, AutoFocusProvider} from '../contexts';

export default function MainNavigator() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const focus = useAutoFocus();

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={Keyboard.dismiss} style={[styles.text]}>
            Dismiss Keyboard
          </UnderlineText>
        </TopBar>
        <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>E-mail</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={person.email}
                onChangeText={email =>
                  setPerson(person => ({...person, email}))
                }
              />
            </View>
          </View>

          <View style={[styles.textView]}>
            <Text style={[styles.text]}>Name</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={person.name}
                onChangeText={name => setPerson(person => ({...person, name}))}
              />
            </View>
          </View>
          <TouchableView
            notification
            style={[styles.touchableView]}
            onPress={() => Alert.alert('submit')}>
            <Text style={[styles.text, {marginRight: 5}]}>Login</Text>
            <Icon name="login" size={24} />
          </TouchableView>
        </AutoFocusProvider>
        <View style={[{marginBottom: Platform.select({ios: 50})}]} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between'},
  text: {fontSize: 20},
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 24, padding: 10},
  textInputView: {marginTop: 5, borderRadius: 10},
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
