import React, {useState} from 'react';
import type {FC} from 'react';
import {Platform, PanResponder} from 'react-native';
import type {
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import {View, Text} from '../theme/paper';
import * as D from '../data';
import {useScrollEnabled} from '../contexts';

const ios = Platform.OS === 'ios';

type Event = GestureResponderEvent;
type State = PanResponderGestureState;

export type PersonProps = {
  person: D.IPerson;
  onDelete: () => void;
};

const PersonPanRes: FC<PersonProps> = ({person, onDelete}) => {
  const [gestureState, setGestureState] = useState<State | null>(null);
  const [scrollEnabled, setScrollEnabled] = useScrollEnabled();

  const panResponder = PanResponder.create({
    //panResponderGrant와 panResponderRelease 콜백 함수 호출
    onStartShouldSetPanResponder() {
      return true;
    },
    onPanResponderGrant(e: Event, s: State) {
      //ios 에서 터치가 발생하면 부모 flatlist 스크롤을 일시 중지
      ios && setScrollEnabled(false);
      setGestureState(s);
    },
    onPanResponderRelease(e: Event, s: State) {
      //ios 에서 터치가 발생하면 부모 flatlist 스크롤을 일시 중지
      setGestureState(s);
      ios && setScrollEnabled(true);
    },
    onMoveShouldSetPanResponder() {
      return true;
    },
    onPanResponderMove(e: Event, s: State) {
      setGestureState(s);
    },
  });

  return (
    <View background style={[{width: '100%'}]}>
      <Text>scrollEnabled: {scrollEnabled ? 'true' : 'false'}</Text>
      <View accent {...panResponder.panHandlers} style={{height: 300, flex: 1}}>
        {gestureState && <Text>{JSON.stringify(gestureState, null, 2)}</Text>}
      </View>
    </View>
  );
};

export default PersonPanRes;
