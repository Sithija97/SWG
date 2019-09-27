import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class LocationScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ()=>(
      <Image  source={require('./location.png')}
      style={styles.image}
      />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 6.8511,
            longitude: 79.9212,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30
  },
});

