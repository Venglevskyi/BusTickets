import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import { Header } from '../components/Header';
import { RipplePressable } from '../components/RipplePressable';

import theme from '../theme/theme';
import { data } from '../mockData/data';
import { SCREEN_WIDTH } from '../helpers/constant';
import { Screens } from '../navigation/routes';
import { horizontalScale, verticalScale } from '../helpers/scaling';

export const RoutesDetails = ({ route }: any) => {
  const navigation = useNavigation();

  const leftRow = [...Array(data.seat.total).keys()].slice(
    0,
    data.seat.total / 2,
  );
  const rightRow = [...Array(data.seat.total).keys()].slice(
    data.seat.total / 2,
    data.seat.total,
  );

  return (
    <View style={styles.main}>
      <Header
        withSubheader
        text="Seat availability"
        routeNumber={route?.params?.item.title}
        routeDetails={route?.params?.item?.direction}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.seatContainer}>
            {leftRow.map(item => {
              let isReserved = data.seat.reserved.find(el => el === item + 1);
              return (
                <RipplePressable
                  key={item}
                  style={[
                    styles.seat,
                    {
                      backgroundColor: isReserved
                        ? theme.colors.lightBlue
                        : theme.colors.white,
                    },
                  ]}
                  onPress={() => navigation.navigate(Screens.Location)}>
                  <Text>{item + 1}</Text>
                </RipplePressable>
              );
            })}
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.seatContainer}>
            {rightRow.map((item, index) => {
              let isReserved = data.seat.reserved.find(el => el === item + 1);
              return (
                <RipplePressable
                  key={index}
                  style={[
                    styles.seat,
                    {
                      backgroundColor: isReserved
                        ? theme.colors.lightBlue
                        : theme.colors.white,
                    },
                  ]}
                  onPress={() => navigation.navigate(Screens.Location)}>
                  <Text>{item + 1}</Text>
                </RipplePressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { backgroundColor: theme.colors.mainBg, flex: 1 },
  contentContainer: {
    backgroundColor: theme.colors.mainBg,
    alignItems: 'center',
  },
  row: {
    width: SCREEN_WIDTH / 2,
  },
  seat: {
    width: horizontalScale(47),
    height: verticalScale(47),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatContainer: {
    width: SCREEN_WIDTH * 0.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollContainer: { flexDirection: 'row' },
});
