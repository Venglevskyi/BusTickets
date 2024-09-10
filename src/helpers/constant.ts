import { Platform, Dimensions } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get('screen');
