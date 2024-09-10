import * as React from 'react';
import { Text, View } from 'react-native';

export const InfoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>Info!</Text>
    </View>
  );
};
