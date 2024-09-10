import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import theme from '../theme/theme';
import { getFontFamily } from '../helpers/styling';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../helpers/scaling';
import { SCREEN_WIDTH } from '../helpers/constant';
import SpeedIcon from '../assets/images/speed_icon.svg';
import { data } from '../mockData/data';

export const Header = ({
  centered,
  text,
  routeNumber,
  routeDetails,
  withSubheader,
  isLocationSpeed,
}: {
  centered?: boolean | undefined;
  text: string;
  routeNumber?: string;
  routeDetails?: string;
  withSubheader?: boolean;
  isLocationSpeed?: boolean;
}) => (
  <View style={styles.header}>
    <Text style={[styles.text, { textAlign: centered ? 'center' : 'left' }]}>
      {text}
    </Text>

    {withSubheader && (
      <View style={styles.shortInfo}>
        <View style={styles.routeInfo}>
          <Text style={styles.textTitle}>
            {routeNumber ?? data.routes[0].title}
          </Text>

          <Text style={styles.textDirection}>
            {routeDetails ?? data.routes[0].direction}
          </Text>
        </View>
        <View style={styles.speed}>
          {isLocationSpeed ? (
            <>
              <SpeedIcon />

              <Text style={styles.textSpeed}>200kmp</Text>
            </>
          ) : (
            <View style={styles.seatWrapper}>
              <View style={[styles.seatContainer, { marginBottom: 8 }]}>
                <Text>Reserved</Text>
                <View
                  style={[
                    styles.seat,
                    {
                      backgroundColor: theme.colors.lightBlue,
                    },
                  ]}
                />
              </View>

              <View style={styles.seatContainer}>
                <Text>Available</Text>
                <View
                  style={[
                    styles.seat,
                    {
                      backgroundColor: theme.colors.white,
                    },
                  ]}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.mainBg,
    width: SCREEN_WIDTH,
  },
  container: { backgroundColor: theme.colors.mainBg },
  text: {
    fontSize: scaleFontSize(theme.fontSizes.fz26),
    fontFamily: getFontFamily('500'),
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
  },
  shortInfo: {
    width: '100%',
    paddingBottom: horizontalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeInfo: {
    width: SCREEN_WIDTH * 0.55,
    backgroundColor: theme.colors.accentCard,
    paddingVertical: verticalScale(4),
    paddingLeft: horizontalScale(16),
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  textTitle: {
    fontSize: scaleFontSize(theme.fontSizes.fz18),
    fontFamily: getFontFamily('500'),
    color: theme.colors.white,
  },
  textDirection: {
    fontSize: scaleFontSize(theme.fontSizes.fz9),
    fontFamily: getFontFamily('400'),
    color: theme.colors.white,
  },
  speed: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.45,
    justifyContent: 'center',
  },
  textSpeed: { paddingLeft: horizontalScale(8) },
  seatWrapper: { width: SCREEN_WIDTH * 0.45, alignItems: 'center' },
  seatContainer: { flexDirection: 'row', alignItems: 'center' },
  seat: {
    width: horizontalScale(23),
    height: verticalScale(23),
    borderRadius: 8,
    marginLeft: horizontalScale(6),
  },
});
