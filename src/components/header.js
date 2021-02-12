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
import {Context} from '../context/MatchContext';
const {width: screenWidth} = Dimensions.get('window');
const Header = () => {
  const {state} = useContext(Context);

  console.log(state);
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
        data={state.header.series}
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
