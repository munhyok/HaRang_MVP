import { StatusBar } from 'expo-status-bar';
import React, { Component, PureComponent, useState, useEffect, useRef, createRef, useMemo } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Geojson } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Animated from 'react-native-reanimated';
import Modal from 'react-native-modal';


import { Dimensions, StyleSheet, Text, View, Button, PermissionsAndroid, Platform, Alert, ActivityIndicator, Image } from 'react-native';

import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {locations} from '../model/markersdata';
import { version } from 'react';
import { LocationSubscriber } from 'expo-location/build/LocationSubscribers';

import * as firebase from 'firebase';
import "firebase/database";



const windowHeight = Dimensions.get('window').height;



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,

      reports: [],
      //markers:[],
      latitude: [],
      longitude: [],

      data: [],
      index: [],
      value: [],
      title: [],
      //key: [],
      visibleModal: false,
     
    };

  }
    
  

    


    componentDidMount(){
      this.getLocationAsync();
      
      firebase.initializeApp({
        apiKey: "AIzaSyCeFmNbJoDf9EiTC9AOZlnm7QtYOiq42_A",
        authDomain: "harang-database.firebaseapp.com",
        databaseURL: "https://harang-database-default-rtdb.firebaseio.com",
        projectId: "harang-database",
        storageBucket: "harang-database.appspot.com",
        messagingSenderId: "313757664028",
        appId: "1:313757664028:web:a69be06e647d723ce8f0d9",
        measurementId: "G-5TEJ0BXZ51"
      });
      
      const ref = firebase.database().ref('markers');

      ref.on("value", snapshot => {
        this.setState({data: snapshot.val()});
      });

      if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

    }


    handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };


    async getLocationAsync() {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);


      if (status === 'granted') {
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
      } else {
        alert('location permission not granted');
      }
    }


    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>

        <View>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    )


    renderModal = () => (

      <View>
        <Text>Hello</Text>
        {this.renderButton('close', () => this.setState({visibleModal: null}))}
      </View>


    );

   

    
    
    
render () {

  let mark
  
  let hrMap;


 


    return (
      
        <View style={styles.container}>

          
          
            
          <MapView style={styles.map}
          ref={ref => hrMap = ref}
          provider={PROVIDER_GOOGLE}

          initialRegion={{
            latitude: 37.55996325389237,
            longitude: 126.98849835366453,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          showsUserLocation = {true}
          region={this.state.mapRegion}
          //onRegionChange={this.handleMapRegionChange}
          
          showsMyLocationButton = {true}
          //Animated = {true}
          >

          
          
          {this.state.data.map((value, index) => {
            return (
              <View>

              




                <MapView.Marker 
                  key={index}
                  //identifier={}
                  coordinate={value['coordinate']}
                  //title={_marker.title}
                  //description={_marker['description']}

                  onPress={ this.setState({visibleModal: true})}
                  
                  
                
                >
   
                </MapView.Marker>

                
                
                

              </View>
            )
          })}


          

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

  bubble:{
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 3,
    padding: 15,
    width: Dimensions.get('window').width,

  },

  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },

  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  name: {
    fontSize: 16,
    //marginLeft: 2,
  },

  company: {
    fontSize: 8,
    color: 'blue',
  },

  price: {
    fontSize: 12,
    color: 'gray',
    
  },

  image: {
    width : 120,
    height: 80,
  },
  

  map: {
    //flex: 1,
    width: Dimensions.get('window').width,
    height: "100%"
  },

  bottomview: {
    position: 'absolute',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: "#FFF"
  },
 
  
  
});
