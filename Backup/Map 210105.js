import { StatusBar } from 'expo-status-bar';
import React, { Component, PureComponent, useState, useEffect, useRef, createRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';



import { Dimensions, StyleSheet, Text, View, PermissionsAndroid, Platform, Alert, ActivityIndicator, Image } from 'react-native';
import react from 'react';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';





const initialMapState = {
  markers,
}

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
      this.getLocationAsync()

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


    bs = React.createRef();
    fall = new Animated.Value(1);



    renderInner = () => {
      <View >
    
        
      </View>
      
    }

    renderHeader = () => {

      <View>
        <View>
  
        </View>
      </View>
    }

    
    
render () {

  
  

  
  

    return (
        <View style={styles.container}>

          {/* 
          <BottomSheet
            ref = {this.bs}
            snapPoints={[500, 250, 0]}
            renderContent = {this.renderInner}
            renderHeader = {this.renderHeader}
            initialSnap = {1}
            //callbackNode={this.fall}
            //enabledGestureInteraction={true}
          />
            */}
            
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
          
          showsMyLocationButton = {true}
          >
          
          


          {/* 

          <MapView.Marker 
            coordinate = {{latitude : 37.55996325389237,
              longitude: 126.98849835366453,}}
    
              title = {"마커 타이틀"}
              description = {"Test marker"}
              
    
          />

          */}

          <Marker
            coordinate = {{latitude : 37.65996325389237,
              longitude: 126.98849835366453,}}
    
              title = {"마커 타이틀"}
              description = {"Test marker"}
    
              
          >

            

            <Callout tooltip>
              <View>
                <View style = {styles.bubble}>
                  <Text style = {styles.name}> 크루아상</Text>
                  {<Text style = {styles.company}> 파리바게트 </Text> }
                  <Text style = {styles.price}>3000원</Text>
                  <Image style={styles.image}
                    source={require('../../assets/image/TestFood.jpg/')}
                  />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>

          
          
          
          
          
    
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
