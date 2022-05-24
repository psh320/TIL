import {Animated} from 'react-native';

export const interpolate = (
  animeValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[] = [0, 1],
): Animated.AnimatedInterpolation => {
  return animeValue.interpolate({inputRange, outputRange});
};
