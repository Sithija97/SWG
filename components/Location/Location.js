import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';  
import Geolocation from '@react-native-community/geolocation';

Geocoder.init('AIzaSyDfp50rT_iIa365h388F4TjLEWBS39S2kM');

export default class LocationScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location:{
        latitude:null,
        latitude:null
      }
    }
  }
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./location.png')} style={styles.image} />
    ),
  };

  componentDidMount(){
    console.log("Map")
    let address='';
    let latitude=0;
    let longitude=0;
    Geolocation.getCurrentPosition(
      position=> {
        latitude=position.coords.latitude;
        longitude=position.coords.longitude;
        console.log("position=>");
        console.log(position);
        Geocoder.from(position.coords.latitude, position.coords.longitude)
        .then(json => {
          //console.log(json)
          address=json.results[0].formatted_address;
          this.setState(location.latitude=position.coords.latitude,location.longitude=position.coords.longitude);
        }).catch(error => console.log(error));
      },
      error=>{console.log(error)},
      { enableHighAccuracy: true }
      //{enableHighAccuracy: true}
    );
  }
  render() {
    return(
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 6.8511,   
            longitude: 79.9212,  
            latitudeDelta: 0.015,  
            longitudeDelta: 0.0121,  
          }}>  

        <Marker
              draggable
              coordinate={{
                latitude:  this.state.location.latitude, 
                longitude: this.state.location.longitude,
              }}
            />
  
          
        </MapView>  
          
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
  image: {
    width: 30,
    height: 30,
  },
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

/*
    <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 6.8511,
            longitude: 79.9212,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
*/
