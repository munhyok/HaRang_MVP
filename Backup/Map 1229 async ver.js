import { StatusBar } from 'expo-status-bar';
import React, { Component, PureComponent} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';



import { Dimensions, StyleSheet, Text, View, PermissionsAndroid, Platform, Alert } from 'react-native';
import react from 'react';


const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

const colorOfmyLocationMapMarker = 'blue';





class App extends PureComponent {

    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        
    };

    componentDidMount(){
        this.getLocationAsync();
    }

    handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
      };

    async getLocationAsync() {
        
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            this.setState({ hasLocationPermissions: true});

            let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: false});
            this.setState({ locationResult: JSON.stringify(location) });

            this.setState({
                mapRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                },
            }
            );
            
        }else {
            alert('location permission not granted');
        }
    }

render () {

    return (
        <View style={styles.container}>

            
          <MapView style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}

          initialRegion={{
            latitude: 37.55996325389237,
            longitude: 126.98849835366453,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          showsUserLocation = {true}
          region={this.state.mapRegion}
          //onRegionChange={this.handleMapRegionChange}
          //userLocationUpdateInterval = {50000}
          showsMyLocationButton = {true}
          >
          
          
          <MapView.Marker
            coordinate = {{latitude : 37.55996325389237,
              longitude: 126.98849835366453,}}
    
              title = {"마커 타이틀"}
              description = {"Test marker"}
    
    
          />
          <MapView.Marker
            coordinate = {{latitude : 37.65996325389237,
              longitude: 126.98849835366453,}}
    
              title = {"마커 타이틀"}
              description = {"Test marker"}
    
              
          />
    
          </MapView>
          <StatusBar style="auto" />
        </View>
      );
    }

}    
  


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === `ios` ? 0 : Constants.statusBarHeight,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
