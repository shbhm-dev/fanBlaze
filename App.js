import React from "react"
import { SafeAreaView, StyleSheet, View, Text, StatusBar,Image } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from './src/context/MatchContext'
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const App = () => {
  return ( <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}    options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={{ width: 45, height: 45 }} 
              source={require('./src/assets/homeBarIcon/group-44.png')                  
              }/>
         ), 
         tabBarLabel: 'Home'             
        }}/>
      <Tab.Screen name="Profile Screen" component={ProfileScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={{ width: 45, height: 45 }} 
              source={require('./src/assets/profileBarIcon/group-38.png')                  
              }/>
         ), 
         tabBarLabel: 'Profile'             
        }}/>
    </Tab.Navigator>
  </NavigationContainer>)
}

export default () => {
  return <Provider>
    <App/>
    </Provider>
}

