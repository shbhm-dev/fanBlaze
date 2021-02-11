import React from "react"
import { SafeAreaView, StyleSheet, View, Text, StatusBar ,Image} from "react-native"
import Header from '../components/header'
import MatchSection from '../components/MatchSection'
import {
  BarIndicator,
} from 'react-native-indicators';

const HomeScreen = () => {
    return (
      <View style = {styles.container}>
      <Header/>
      <MatchSection/>
      </View>
      )
}
const styles = StyleSheet.create({
  container : {
    backgroundColor :'#f4f4f4',
    flex:1}
  
})
export default HomeScreen