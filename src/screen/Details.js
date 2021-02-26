import React, { Component, PureComponent }  from 'react';
import {SafeAreaView, StyleSheet, Text, View, Platform,Image,Button, ActivityIndicator} from 'react-native';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import { rgb } from 'd3';



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






export default class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          mapRegion: null,
          imageLoaded: false,

        };
    
      }


      async imageloadingProcess() {

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
                    source = {{uri: foodImage}}
                                
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

      


      


    render() {



        const {route, navigation} = this.props;
        const {titleId, companyName, priceP, foodImage,backImg} = route.params;


        return(

            
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style = {{padding: 20, flexDirection: 'row',  justifyContent: 'space-between' }}>
                        <View>
                            <Image style={styles.backImg}
                                source={{uri: backImg}}
                            />
                        </View>
                        <Text style ={{fontWeight: 'bold', fontSize: 45,color:'#303030', }}>{companyName}</Text>

                    
                    </View>

                    {itemSperate()}

                   


                   
                        <View >

                            
                        
                        <Image style={styles.image}
                            source={{uri: foodImage }}
                        />
                

                        </View>
                        
                        
                        
                        
                    

                    {itemSperate()}

                    <View style={styles.bankSector}>
                        <Text style = {{fontSize: 30, fontWeight: '200'}}>연동 계좌</Text>

                        
                    </View> 
                    <View style={{alignItems: 'center', justifyContent: 'center',paddingTop: 30}}>
                            <Text>연동 된 계좌가 없습니다!</Text>
                    </View>

                </ScrollView>
                
                
                <StatusBar style="auto" />
                
            </SafeAreaView>
            
        );
    };
};


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
        height: 150,
    },
})

