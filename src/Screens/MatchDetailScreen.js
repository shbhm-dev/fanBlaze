import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

const MatchDetailScreen = ({route}) => {
  return <Text>{route.params.match_name}</Text>;
};
const style = StyleSheet.create({});
export default MatchDetailScreen;
