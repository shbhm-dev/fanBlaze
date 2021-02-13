import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MatchDetailScreen from '../screens/MatchDetailScreen';
const Stack = createStackNavigator();
const StackComponent = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

      <Stack.Screen name="Match Screen" component={MatchDetailScreen} />
    </Stack.Navigator>
  );
};
export default StackComponent;
