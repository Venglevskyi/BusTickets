import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Card } from '../components/Card';

import { data } from '../mockData/data';
import theme from '../theme/theme';

export const RoutesScreen = () => {
  return (
    <View style={styles.main}>
      <FlatList
        data={data.routes}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <Card item={item} />}
        ListHeaderComponent={<Header centered text="Select your route" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: { backgroundColor: theme.colors.mainBg },
  contentContainer: {
    backgroundColor: theme.colors.mainBg,
    alignItems: 'center',
  },
});
