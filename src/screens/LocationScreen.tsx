import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import { Header } from '../components/Header';

import { requestPermissions } from '../helpers/permissions';

const defaultInitRegion = {
  longitude: 30.523333,
  latitude: 50.450001,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

export const LocationScreen = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }>(null);

  useEffect(() => {
    (async () => {
      await requestPermissions([
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]);
    })();
  }, []);

  Geolocation.getCurrentPosition(info =>
    setLocation({
      longitude: info.coords.longitude,
      latitude: info.coords.latitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }),
  );

  return (
    <View style={styles.main}>
      <Header text="Location" withSubheader isLocationSpeed />

      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={location ? location : defaultInitRegion}>
          {location && <Marker coordinate={location} />}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
  mapStyle: {
    height: '100%',
    width: '100%',
  },
  mapContainer: {
    flex: 1,
  },
});
