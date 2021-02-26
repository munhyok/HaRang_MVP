import React, { Component, PureComponent }  from 'react';
import {SafeAreaView, StyleSheet, Text, View, Platform,Image,Button} from 'react-native';
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




class App extends PureComponent {
    render() {
        return(

            
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style = {{padding: 20, flexDirection: 'row',  justifyContent: 'space-between' }}>
                        <Text style ={{fontWeight: 'bold', fontSize: 45,color:'#303030', }}>Wallet</Text>

                        <View style={styles.sendSector}>
                            <Button style={styles.sendButton}
                                title = {'송금'}
                                style={{backgroundColor: '0,0,0,0.2'}}
                                color = {'#FF7F50'}
                                
                                
                                
                                
                            />
                        </View>
                    </View>

                    {itemSperate()}

                    <View style = {styles.coinInfo}>
                        
                        <View style={styles.currentCoin}>
                            <Text style={{fontWeight: '200',paddingTop: 5,  fontSize: 40 , color:'#636363'}}>2.09</Text>
                            <Text style={{fontWeight: '300', paddingTop: 25, fontSize: 20, color:'#FF7F50'}}>{' '}HRC</Text>
                        </View>

                        

                    </View>


                    <View style = {styles.codeImages}>
                        <View style={{paddingBottom: 10,}}>
                            <Image
                                source = {require('../Image/barofuturesQR.png')}
                            
                            />

                        </View>
                        
                        <View style={{paddingLeft: 9, paddingBottom: 15 ,}}>
                        <Image
                            source = {require('../Image/barofuturesBar.png')}
                        />

                        </View>
                        
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
    }
    
})


export default App