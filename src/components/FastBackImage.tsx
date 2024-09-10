import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

type ImageProps = {
  imageUri?: string;
  defaultImage: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
};

export const FastBackImage = ({
  imageUri,
  defaultImage,
  containerStyle,
  resizeMode = 'contain',
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={containerStyle}>
      <Image
        resizeMode={resizeMode}
        source={imageUri ? { uri: imageUri } : defaultImage}
        style={styles.imageStyle}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />

      {isLoading && <ActivityIndicator style={styles.spinnerContainer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
