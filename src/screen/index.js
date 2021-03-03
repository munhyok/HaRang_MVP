import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, createBottonTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Maps from './Map';
import Detail from './Details';
import Payments from './Payment';
import Profiles from './Profile';
import Wallets from './Wallet';
import testMaps from './TestMap';
//<CoreStack.Screen name = "HaRDetails" component = {Detail} />
//<CoreStack.Screen name = "HaRPayments" component = {Payments} />




const CoreStack = createStackNavigator();


function CoreStackScreen() {
    return (

      <CoreStack.Navigator screenOptions = {{headerShown: false}}>

        <CoreStack.Screen name = "HaRMaps" component = {Maps} 
        

        />
        
        <CoreStack.Screen name="매장정보" component={Detail}
            options = {{
                headerShown: false ,
                
            }}
            />
      </CoreStack.Navigator>

    
    )
}


const ProfileStack = createStackNavigator();


function ProfileStackScreen() {
    return(
        <ProfileStack.Navigator screenOptions = {{headerShown: false}}>
            <ProfileStack.Screen name = "Profile" component = {Profiles} />
        </ProfileStack.Navigator>
    )
}


const WalletStack = createStackNavigator();

function WalletStackScreen(){

    return(
        <WalletStack.Navigator screenOptions = {{headerShown: false}}>
            <WalletStack.Screen name = "Wallet" component = {Wallets} />

        </WalletStack.Navigator>
    )

}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>

        

        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    
                    if (route.name === 'Map'){
                        iconName = focused
                            ? 'map'
                            : 'map-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Wallet') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    }

                    return(
                        <Ionicons name={iconName} size={size} color={color}/>


                        
                    ); 
                    
                    
                },
            })}
                tabBarOptions = {{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
            <Tab.Screen name = "Map" component = {CoreStackScreen} />
            <Tab.Screen name = "Profile" component = {ProfileStackScreen} />
            <Tab.Screen name = "Wallet" component = {WalletStackScreen} />
        </Tab.Navigator>

    </NavigationContainer>
    
  );


}

