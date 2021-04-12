import React, { Component, PureComponent }  from 'react';
import {SafeAreaView, StyleSheet, Text, View, Platform,Image,Button, ActivityIndicator, Animated, Dimensions,ImageBackground, FlatList} from 'react-native';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { rgb } from 'd3';
import AsyncImageAnimated from 'react-native-async-image-animated';

import * as firebase from 'firebase';
import "firebase/database";



function itemSperate (){
    return(
        <View style ={{
            backgroundColor: '#E3E3E3',
            height: 1,
            width: '90%',
            alignSelf: 'center',
            //paddingTop: 10,
        
        }}/>
    )
}

s






class App extends PureComponent {
    

    constructor(props) {
        super(props);
        this.state = {
          mapRegion: null,
          imageLoaded: false,
          foodImage: [],
          menu: [],

          item: [],
          data:[],
          list: [],
          animatedValue: null,

        };
    
      }




      
      

      async imageloadingProcess(uri_image) {

        try {
            this.setstate({
                imageLoaded: true,
            })
        } catch {
            this.setState({
                imageLoaded: false,
            })
        }
        if (this.state.imageLoaded) {

            return(
                <View>
                    <Image
                    source = {{uri: uri_image}}
                                
                />
                </View>
                
            );
            
        }else{

            return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <ActivityIndicator size="large" color="#636673" animating/>
                    </View>
            );
            
        }
    }



    componentDidMount(){

        
    }
      


      


    render() {

        const {route, navigation} = this.props;
        const {titleId, companyName, priceP, foodImage,backImg, menu, mName, menuKey, mindex} = route.params;


        console.log(backImg);
        console.log(foodImage);
        console.log(menu);
        
        //console.log(menuKey);

        const renderItem = ({menu,item, index}) => (
            <View>
                
                <Text>{item.mName}</Text>
            </View>
        )

        return(

            
            <SafeAreaView style={styles.container}>
                <View>
                    <View style = {{flexDirection: 'column',  justifyContent: 'space-between' }}>
                        <View >
                            <ImageBackground style={styles.backImg}
                                source={{uri: backImg}}
                                
                            >
                            
                            
                            </ImageBackground>

                            <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 5,}}>
                            <Text style ={{fontWeight: 'bold', fontSize: 30, color: '#303030'}}>{companyName}</Text>
                            </View>
                            <Text style = {{alignSelf: 'center', fontWeight: '100',paddingBottom: 5}}>Open : 00:00 / Close : 00:00</Text>

                        </View>
                        

                    
                    </View>

                    {itemSperate()}
                    
                   

                    <View>

                        
                        
                        
                        
                        
                        
                    </View>

                    {itemSperate()}

                    <View style={styles.bankSector}>
                        <Text style = {{fontSize: 30, fontWeight: '200'}}>Menu</Text>

                        
                        <FlatList style={{height: '90%'}}
                            key = {this.state.item.id}
                            keyExtractor={item => item.id}
                            data={Object.keys(menu)}
                            renderItem={({item}) => 
                                
                                <View>
                                    
                                    
                                    <Image style={styles.backImg}
                                        uri = {menu[item].mImg}
                                    >

                                        
                                    </Image>
                                    <Text>{menu[item].mName}</Text>
                                    <Text>{menu[item].mPrice}</Text>
                                    
                                </View> 
                                
                                
                            }
                            
                        />
                    </View> 
                    
                    
                    
                   
                    

                </View>
                
                
                

                <StatusBar style="auto" />
                
            </SafeAreaView>
            
        );
    };
};

export default App


const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: Platform.OS === `ios` ? 0 : Constants.statusBarHeight,
        backgroundColor: '#FFFFFF'
        
    },

    coinInfo:{
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },

    currentCoin:{
        //backgroundColor: 'blue',
        flexDirection: 'row',
    },

    sendSector:{
        //backgroundColor: 'blue',
        paddingTop: 10,
        
    },

    sendButton:{
        
    },

    codeImages:{
        flexDirection: 'column',
        alignSelf: 'center',
    },

    bankSector: {
        paddingTop: 10,
        paddingLeft: 20,
        //backgroundColor: 'red',
    },
    image: {
        width : 120,
        height: 80,
      },
    backImg: {
        width: '100%',
        height: 200,
        //opacity: 0.9,
        justifyContent: 'flex-end'
    },
})

