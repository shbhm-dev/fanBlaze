import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Header from '../components/HeaderComponent';
import MatchSection from '../components/MatchSection';
import {BarIndicator} from 'react-native-indicators';
import {Context} from '../context/matchContext';
const HomeScreen = ({navigation}) => {
  const [titleText, setTitleText] = useState('');
  const filterData = (scoreData) => {
    if (titleText == '') {
      return scoreData;
    }
    return scoreData.filter((element) => element.series_id == titleText);
  };

  return (
    <View style={styles.container}>
      <Header value={setTitleText} />
      <MatchSection value={filterData} />
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
