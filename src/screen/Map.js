import { StatusBar } from 'expo-status-bar';
import React, { Component, PureComponent, useState, useEffect, useRef, createRef, useMemo } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Geojson } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Animated from 'react-native-reanimated';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Modalize} from 'react-native-modalize';
import SwipeablePanel from 'react-native-sheets-bottom';


import * as firebase from 'firebase';
import "firebase/database";

import { Dimensions, StyleSheet, Text, View, PermissionsAndroid, Platform, Alert, ActivityIndicator, Image, Button } from 'react-native';
import react from 'react';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {locations} from '../model/markersdata';
import { version } from 'react';
import { LocationSubscriber } from 'expo-location/build/LocationSubscribers';
import {MyModal} from '../module/wraping';

import AsyncImageAnimated from 'react-native-async-image-animated';


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
      index: [],
      image: [],
      backImg: [],
      description: [],
      locations: [],
      _marker: {
        index: '',
        title: '',
        coordinate: '',
        description: '',
        price: '',
        
      },
      company: [],
      price: [],
      data:[],
      currentItem: [],

      
     
    };

  }
    

    


    componentDidMount(){
      this.getLocationAsync()
      //this.index = 1;

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


    handleMarkerPress(event) {
      const markerID = event.nativeEvent.id
      
    }


    renderInner = () => {
      <View>
    
        
      </View>
      
    }

    renderHeader = () => {

      <View>
        <View>
  
        </View>
      </View>
    }




    mapMarkers = (_marker) => {
      return this.state.data.map((_marker, i) => (
  
        
  
        <View >
        
  
        <Marker 
          key={_marker['index']}
          coordinate={_marker['coordinate']}
          //title={_marker.title}
          //description={_marker['description']}
  
        
          
          
        >

            <Callout tooltip
            
            onPress = {() => this.props.navigation.navigate('매장정보', {
              titleId: _marker.title,
              companyName: _marker.company,
              priceP: _marker.price,
              foodImage: _marker['img'],
              backImg: _marker['backImg'],
              menu: _marker.menu,
              mName: _marker.menu.mName,
            })}
            
            >
            
              <View>

                

                <View style = {styles.bubble}>
                  <Text style = {styles.name}> {_marker.title}</Text>
                  {<Text style = {styles.company}> {_marker.company} </Text> }
                  <Text style = {styles.price}>{_marker.price}</Text>
                  <Image style={styles.image}
                    source={{uri: _marker['img'] }}
                  />
                  
                  

                  
                </View>

                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />

                
                

              </View>

              
            </Callout>
 
        
        </Marker>
        
        </View>
      ))
  
  
      
      
    }
    

    modalScreen = () => {
      return locations.markers.map((_marker,index) => (


        
        <Modalize
        
          ref={this.modal}
          snapPoint={200}
          modalTopOffset={100}
          overlayStyle={{
            backgroundColor: 'transparent'
          }}

          

          handlePosition = {1}
          
        
        >


            
            
            <View >
              <View style = {styles.bubble} >
                <Text style = {styles.name}> {_marker.title}</Text>
                {<Text style = {styles.company}> {_marker.company} </Text> }
                <Text style = {styles.price}>{_marker.price}</Text>
                <Image style={styles.image}
                  source={{uri: _marker['img'] }}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
            
      
          
          

        </Modalize>
      ))

    }

    
    
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
          >
          
          
          {this.mapMarkers()}
          


          
          
          
          

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
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,

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
    width: Dimensions.get('window').width,
    height: "100%"
  }
});
