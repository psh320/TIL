import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);

const TopBar = () => {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
      <Icon name="menu" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.amber500,
  },
  text: {fontSize: 20, textAlign: 'center'},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1},
});

export default TopBar;
