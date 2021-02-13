import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const TabComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 45, height: 45}}
              source={require('../assets/homeBarIcon/group-44.png')}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 45, height: 45}}
              source={require('../assets/profileBarIcon/group-38.png')}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
export default TabComponent;
