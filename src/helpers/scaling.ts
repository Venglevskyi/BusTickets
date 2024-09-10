import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = (): number => (isSmall ? 330 : 350);
// it's ratio between width and height
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = (): number => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = (): number => (width > 410 ? 430 : 450);
const scaleFontSize = (size: number) =>
  Math.round((width / guidelineBaseFonts()) * size);

export { horizontalScale, verticalScale, scaleFontSize };
