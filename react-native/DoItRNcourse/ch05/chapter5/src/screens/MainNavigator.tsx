import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Themed from './Themed';
import Imperative from './Imperative';

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'input', title: 'Input', icon: 'apple-keyboard-caps'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    input: Input,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
