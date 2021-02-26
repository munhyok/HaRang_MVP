import React, { Component, PureComponent }  from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, Platform, Image} from 'react-native';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
//import { PieChart, BarChart, XAxis, LineChart, Grid } from 'react-native-svg-charts'
import { render } from 'react-dom';
import {Svg, G, Line, Rect, Text as SvgText} from 'react-native-svg'
import * as d3 from 'd3'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import {piechart} from '../module/piechart'
import { Circle } from 'react-native-svg';

import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width

const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 250) => `rgba(250, 102, 99, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    //useShadowColorFromDataset: true,
    fillShadowGradientOpacity: 0.7,
  }

function barChart() {

    

      const data = {
        labels: ['12월','1월', '2월'],
        datasets: [{
          data: [1.5,5, 8.25],
          //color: (opacity = 100) => `rgba(134, 65, 244, ${opacity})` // optional
          //strokeWidth: 2 // optional
        }]
      }

      return(
        
        <View>
            <BarChart
        //style={graphStyle}
        data={data}
        width={screenWidth}
        height={200}
        //yAxisLabel={'kg'}
        chartConfig={chartConfig}
        fromZero={true}
        showValuesOnTopOfBars={true}
        //showBarTops={true}
      />
        </View>
        
      )
 
}


function pieChart() {
    const data = [
        {
          name: "Food",
          population: 60,
          color: "#1BE386",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Transport",
          population: 30,
          color: "#E09689",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Energy",
          population: 10,
          color: "#E089B5",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
    ]

    return(
        <View>
            <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[0, 0]}
        //absolute
        />
        </View>
        
    )
    
}


function itemSperate (){
    return(
        <View style ={{
            backgroundColor: '#E6ADA5',
            height: 1,
            width: '90%',
            alignSelf: 'center',
            //paddingTop: 10,
        
        }}/>
    )
}




class App extends React.PureComponent {

    

    

    render() {


        





        return(

            
            <SafeAreaView style={styles.container}>
                <ScrollView >
                
                <View style = {styles.userContainer}>


                    <View style = {styles.userProfile}>
                        <Image
                            style = {styles.userImage}
                            source = {require ('../Image/HaRLogi_8x.png')}
                    />


                        </View>

                    <View style = {styles.userInfo}>
                        <Text style = {styles.userName}>강문혁</Text>
                        <Text style = {styles.ranking}> Ranking</Text>
                        <Text style = {styles.rankingPoint}>10위</Text>
                        
                    </View>

                    <View style = {styles.rankingInfo}>
                        
                    </View>
                
                </View>



                <View style = {styles.summary}>
                    <Text style = {styles.summaryText}>이번 달에 8.25kg의 탄소를 절감하셨어요!{"\n"} 
                        힘을 합쳐서 북극곰을 구해주세요!</Text>
                </View>

                {itemSperate()}

                <View style={{paddingTop: 10, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: '#404040'}}>탄소 절감</Text>
                {barChart()}
                </View>

                {itemSperate()}

                <View style={{alignItems: 'center', paddingTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, color: '#404040'}}>요약</Text>
                </View>
                <View >
                {pieChart()}
                </View>
                

                {itemSperate()}

                <StatusBar style="auto" />

                </ScrollView>

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
        backgroundColor: '#FFFFFF',
        
    },

    userContainer:{
        //backgroundColor: '#FD63EB',
        flexDirection: 'row'
    },

    userImage:{
        borderWidth: 1.5,
        borderColor: '#FDEBE3',
        borderRadius: 100,
        width: 80,
        height: 80,
        
        
    },

    userProfile:{
        //backgroundColor: '#FA736F',
        //flex: 1,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        
    },

    userInfo: {
        flex: 0,
        //backgroundColor: '#7CFDE7',
        paddingTop: 15,
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },

    rankingInfo: {
        //backgroundColor: '#88FAA7',
        paddingTop: 60,
        //justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'flex-end',
        
        alignItems: 'flex-start',
        //paddingRight: 30,
    },

    userName: {

        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 8,
        color: '#404040',
    },

    ranking: {
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 8,
        //alignItems: 'flex-end',
        color: '#404040',
    },



    rankingPoint:{
        fontSize: 23,
        //paddingTop: 70,
        paddingLeft: 38,
        
        fontWeight: 'bold',
        //flexDirection: 'column',
        color: '#303030',
    },

    summary: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },

    summaryText: {
        textAlign: 'center',
        color: '#FA3C36'
    }


})


export default App