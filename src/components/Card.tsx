import * as React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FastBackImage } from './FastBackImage';
import { RipplePressable } from './RipplePressable';

import { SCREEN_WIDTH } from '../helpers/constant';
import { verticalScale, scaleFontSize } from '../helpers/scaling';
import { getShadow, getFontFamily } from '../helpers/styling';
import theme from '../theme/theme';
import { Screens } from '../navigation/routes';

type CardProps = {
  title: string;
  image: ImageSourcePropType;
  direction: string;
};

export const Card = ({ item }: { item: CardProps }) => {
  const navigation = useNavigation();

  return (
    <RipplePressable
      style={styles.container}
      onPress={() => navigation.navigate(Screens.RoutesDetails, { item })}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.direction}</Text>
      </View>

      <View style={styles.imageContainer}>
        <FastBackImage defaultImage={item.image} />
      </View>
    </RipplePressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 64,
    aspectRatio: 0.75,
    marginBottom: verticalScale(24),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...getShadow(),
  },
  titleContainer: {
    backgroundColor: theme.colors.accentCard,
    width: SCREEN_WIDTH - 66, // 66 - horizontal padding + 2px border
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(12),
  },
  title: {
    fontFamily: getFontFamily('500'),
    fontSize: scaleFontSize(theme.fontSizes.fz25),
    color: theme.colors.white,
  },
  description: {
    fontFamily: getFontFamily('400'),
    fontSize: scaleFontSize(theme.fontSizes.fz14),
    color: theme.colors.white,
  },
  imageContainer: { flex: 1 },
});
