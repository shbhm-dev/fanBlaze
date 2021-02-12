import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {Context} from '../context/HeaderContext';
const {width: screenWidth} = Dimensions.get('window');
const Header = () => {
  const {state, getSeriesData} = useContext(Context);
  useEffect(() => {
    getSeriesData();
  }, []);

  if (!state) {
    return null;
  }

  return (
    <View style={{width: screenWidth, backgroundColor: 'white', marginTop: 40}}>
      <View style={style.header}>
        <Image
          style={style.headerImage}
          source={require('../assets/fanblazeLogo/logo.png')}
        />
        <Text style={style.headerText}>FanBlaze</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator="false"
        data={state.series}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Text
              style={{paddingLeft: 16, paddingTop: 8}}
              // color="black"
              // title=
            >
              {item.short_name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    width: screenWidth,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Medium',
    fontWeight: 'bold',
  },
  headerImage: {
    height: 30,
    width: 25,
    paddingLeft: 50,
  },
});
export default Header;
