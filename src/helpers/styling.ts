import { StyleProp } from 'react-native';
import theme from '../theme/theme';

export const getFontFamily = (
  weight: string = '400',
  baseFont: string = 'Poppins',
): string => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-ExtraLight`;
    case '300':
      return `${baseFont}-Light`;
    case '400':
      return `${baseFont}-Regular`;
    case '500':
      return `${baseFont}-Medium`;
    case '600':
      return `${baseFont}-Semibold`;
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};

export const getShadow = (
  color: string = 'rgba(0, 0, 0, 0.5)',
  shadowRadius: number = 2,
  shadowOpacity: number = 0.6,
  elevation = 2,
): StyleProp<any> => {
  return {
    elevation,
    borderWidth: 0,
    shadowRadius,
    shadowOpacity,
    borderColor: theme.colors.transparent,
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  };
};

export const getHitSlop = () => ({
  top: 20,
  left: 20,
  right: 20,
  bottom: 20,
});
