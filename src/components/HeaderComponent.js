import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import FilterComponent from './FilterComponent';

const {width: screenWidth} = Dimensions.get('window');
const Header = (props) => {
  return (
    <>
      <View style={style.header}>
        <Image
          style={style.headerImage}
          source={require('../assets/fanblazeLogo/logo.png')}
        />
        <Text style={style.headerText}>FanBlaze</Text>
      </View>
      <FilterComponent value={props.value} />
    </>
  );
};
const style = StyleSheet.create({
  header: {
    width: screenWidth,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  headerText: {
    paddingLeft: 10,
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
