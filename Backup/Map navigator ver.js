import { StatusBar } from 'expo-status-bar';
import React, { Component, PureComponent, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { ActivityIndicator,SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';



import { Dimensions, StyleSheet, Text, View, PermissionsAndroid, Platform, Alert } from 'react-native';
import react from 'react';




class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      mapRegion: null,

      latitude: 0,
      longitude: 0,
      
    };

  }
    
    componentDidMount(){

      
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,

            mapRegion: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
          });

        },
        error => this.setState({error: error.message}),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        
        


        );

        
    }

    handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };

    
render () {

    return (
        <View style={styles.container}>

            
          <MapView style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}

          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
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
