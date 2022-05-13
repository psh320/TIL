import React from 'react';
import type {FC, ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import type {ComponentProps} from 'react';

export type TouchableViewProps = {
  children?: ReactNode;
};

export const TouchableView: FC<TouchableViewProps> = ({children}) => {
  return (
    <TouchableOpacity>
      <View>{children}</View>
    </TouchableOpacity>
  );
};
