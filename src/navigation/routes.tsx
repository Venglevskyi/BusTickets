import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RoutesScreen } from '../screens/RoutesScreen';
import { LocationScreen } from '../screens/LocationScreen';
import { InfoScreen } from '../screens/InfoScreen';
import { RoutesDetails } from '../screens/RoutesDetailsScreen';
import BusIcon from '../assets/images/bus_icon.svg';
import LocationIcon from '../assets/images/location_icon.svg';
import InfoIcon from '../assets/images/info_icon.svg';

export enum Screens {
  Home = 'Home',
  Routes = 'Routes',
  RoutesDetails = 'RoutesDetails',
  Location = 'Location',
  Info = ' Info',
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RoutesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.Routes} component={RoutesScreen} />
      <Stack.Screen name={Screens.RoutesDetails} component={RoutesDetails} />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen
          name={Screens.Home}
          component={RoutesStack}
          options={() => ({
            tabBarIcon: () => <BusIcon />,
          })}
        />
        <Tab.Screen
          name={Screens.Location}
          component={LocationScreen}
          options={() => ({
            tabBarIcon: () => <LocationIcon />,
          })}
        />
        <Tab.Screen
          name={Screens.Info}
          component={InfoScreen}
          options={() => ({
            tabBarIcon: () => <InfoIcon />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
