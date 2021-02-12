import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Header from '../components/header';
import MatchSection from '../components/MatchSection';
import {BarIndicator} from 'react-native-indicators';
import {Context} from '../context/MatchContext';
const HomeScreen = ({navigation}) => {
  

  return (
    <View style={styles.container}>
      <Header  />
      <MatchSection  />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
});
export default HomeScreen;
