import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react';
import type {FC} from 'react';
import {Image, Text, View, Alert, Animated, Easing} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar} from '../components';
import {styles} from './Person.style';
import {Text as ThemeText, View as ThemeView} from '../theme/paper';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

// const PersonBasics: FC<PersonProps> = ({person}) => {
//   const animValue = new Animated.Value(0);
// };

//we take useRef hook to cache the Animated.Value class Instance.
// const PersonBasics: FC<PersonProps> = ({person}) => {
//   const animValue = useRef(new Animated.Value(0)).current;
//   const rightViewAnimStyle = {opacity: animValue};
//   const onPress = () => {
//     Animated.timing(animValue, {
//       toValue: 1,
//       useNativeDriver: true,
//       duration: 1000,
//     }).start();
//   };
//   <Avatar uri={person.avatar} size={50} onPress={onPress} />
//   <Animated.View
//     style={[styles.rightView, rightViewAnimStyle]} />;
// };

const PersonBasic: FC<PersonProps> = ({person, deletePressed}) => {
  const animValue = useRef(new Animated.Value(0)).current;
  const [realAnimValue, setRealAnimmValue] = useState<number>(0);
  const [animationEnd, setAnimationEnd] = useState<boolean>(false);

  useEffect(() => {
    const id = animValue.addListener((state: {value: number}) => {
      setRealAnimmValue(state.value);
    });
    return () => animValue.removeListener(id);
  }, []);

  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
      }).start(() => setAnimationEnd(notUsed => true)),
    [],
  );

  const rightViewAnimStyle = {opacity: animValue};

  return (
    <ThemeView>
      <ThemeText style={[{fontSize: 20}]}>
        realAnimValue: {realAnimValue}
      </ThemeText>
      <ThemeText style={[{fontSize: 20}]}>
        animationEnd: {animationEnd ? 'true' : 'false'}
      </ThemeText>
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar
            imageStyle={[styles.avatar]}
            uri={person.avatar}
            size={50}
            onPress={avatarPressed}
          />
          <Text style={[styles.text]}>Press Me</Text>
        </View>
        <Animated.View style={[styles.rightView, rightViewAnimStyle]}>
          <Text style={[styles.name]}>{person.name}</Text>
          <Text style={[styles.email]}>{person.email}</Text>
          <View style={[styles.dateView]}>
            <Text>{moment(person.createdDate).startOf('day').fromNow()}</Text>
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
            {person.comments}
          </Text>
          <Image style={[styles.image]} source={{uri: person.image}} />
          <View style={[styles.countsView]}>
            <Icon name="comment" size={24} color={Colors.purple500} />
            <Icon name="repeat-variant" size={24} color={Colors.purple500} />
            <Icon name="heart" size={24} color={Colors.purple500} />
          </View>
        </Animated.View>
      </View>
    </ThemeView>
  );
};

export default PersonBasic;
