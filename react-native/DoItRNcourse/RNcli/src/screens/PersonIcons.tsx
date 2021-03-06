import React, {useCallback} from 'react';
import type {FC, Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import {IconText} from '../components';
import {styles} from './Person.style';

type PersonIconsProps = {
  person: D.IPerson;
  setPerson: Dispatch<SetStateAction<D.IPerson>>;
};

const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
  const commentPressed = useCallback(
    () =>
      setPerson(person => ({
        ...person,
        counts: {
          ...person.counts,
          comment: person.counts.comment + 1,
        },
      })),
    [],
  );

  const retweetPressed = useCallback(
    () =>
      setPerson(person => ({
        ...person,
        counts: {
          ...person.counts,
          retweet: person.counts.retweet + 1,
        },
      })),
    [],
  );

  const heartPressed = useCallback(
    () =>
      setPerson(person => ({
        ...person,
        counts: {
          ...person.counts,
          heart: person.counts.heart + 1,
        },
      })),
    [],
  );

  return (
    <View style={[styles.countsView]}>
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={commentPressed}
        name="comment"
        size={24}
        color={Colors.blue500}
        textStyle={[styles.iconText]}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={retweetPressed}
        name="repeat-variant"
        size={24}
        color={Colors.purple500}
        textStyle={[styles.iconText]}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={heartPressed}
        name="heart"
        size={24}
        color={Colors.red500}
        textStyle={[styles.iconText]}
        text={person.counts.heart}
      />
    </View>
  );
};

export default PersonIcons;
