import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { getHitSlop } from '../helpers/styling';

type RipplePressableProps = {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
  rippleOpacity?: number;
};

export const RipplePressable = ({
  style,
  onPress,
  disabled,
  children,
  rippleOpacity,
}: RipplePressableProps) => (
  <Ripple
    style={style}
    onPress={onPress}
    hitSlop={getHitSlop()}
    disabled={disabled}
    rippleOpacity={rippleOpacity ?? 0.2}>
    {children}
  </Ripple>
);
