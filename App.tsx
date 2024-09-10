import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';

import { Routes } from './src/navigation/routes';
import theme from './src/theme/theme';

const App = (): React.JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.container} />
      <StatusBar />
      <Routes />
      <SafeAreaView />
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.mainBg },
});

export default App;
