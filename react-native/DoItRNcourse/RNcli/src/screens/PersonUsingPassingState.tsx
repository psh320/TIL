import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import {Image, Text, View, Alert} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar, IconText} from '../components';
import {styles} from './Person.style';
import PersonIcons from './PersonIcons';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const PersonUsingPassingState: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), []);
  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={initialPerson.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{initialPerson.name}</Text>
        <Text style={[styles.email]}>{initialPerson.email}</Text>
        <View style={[styles.dateView]}>
          <Text>
            {moment(initialPerson.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {initialPerson.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: initialPerson.image}} />
        <PersonIcons person={person} setPerson={setPerson} />
      </View>
    </View>
  );
};

export default PersonUsingPassingState;
