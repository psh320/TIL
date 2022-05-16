import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {Avatar} from '../components';
import * as D from '../data';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>;

const Interval = () => {
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([]);
  const [start, setStart] = useState(true);
  const toggleStart = useCallback(() => setStart(start => !start), []);
  const clearAvatars = useCallback(() => setAvatars(notUsed => []), []);
  useEffect(() => {
    const id = setInterval(() => {
      if (start) {
        setAvatars(avatars => [
          {id: D.randomId(), avatar: D.randomAvatarUrl()},
          ...avatars,
        ]);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [start]);

  const children = avatars.map(({id, avatar}) => (
    <Avatar
      key={id}
      uri={avatar}
      size={70}
      viewStyle={styles.avatarViewStyle}
    />
  ));

  return (
    <View style={styles.view}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText} onPress={toggleStart}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text style={styles.topBarText} onPress={clearAvatars}>
          Clear Avatars
        </Text>
      </View>
      <Text style={styles.title}>Interval</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.lime300},
  title: {fontSize: 30, fontWeight: '600'},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.blue900,
  },
  topBarText: {fontSize: 20, color: 'white'},
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatarViewStyle: {padding: 5},
});

export default Interval;
