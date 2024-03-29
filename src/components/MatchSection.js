import React, {useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PixelRatio,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Footer from './Footer';
import TeamDetails from './TeamDetails';
import {Dimensions} from 'react-native';
import {useState} from 'react';
import {Context} from '../context/matchContext';

const {width: screenWidth} = Dimensions.get('window');

const MatchSection = ({value, nav}) => {
  const {state} = useContext(Context);

  const items = value(state.score.cards);
  const data = [];
  if (state) {
    items.forEach((element) => {
      if (state) {
        data.push({
          id: element._id,
          team1: element.match_json.teams.a.short_name,
          team2: element.match_json.teams.b.short_name,
          status:
            element.status == 'STARTED'
              ? '🔴 LIVE'
              : element.start_date
                  .substring(0, 10)
                  .split('-')
                  .reverse()
                  .join('-') +
                ',' +
                element.start_date.substring(11, 16),
          stadium: element.match_json.stadium.name,
          city: element.match_json.stadium.city,
          toss: 'IND',
          ccr: '10',
          match_name: element.match_json.short_name,
        });
      }
    });
  }
  console.log(data);

  _renderItem = ({item}) => {
    // console.log(item)
    return (
      <TouchableOpacity
        style={styles.corousalContainer}
        onPress={() =>
          nav.navigate('MatchScreen', {
            match_name: item.match_name,
          })
        }>
        <View style={styles.corousalContainer}>
          <ImageBackground
            source={require('../assets/corouselImage/bitmap.png')}
            style={styles.bacgroundImage}>
            <Text style={styles.mainTitle}>{item.status}</Text>
            <Text
              style={
                styles.locationText
              }>{`${item.stadium} , ${item.city}`}</Text>
            <TeamDetails value={item.team1} />
            <TeamDetails value={item.team2} />
            <Footer val={item.toss} />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: screenWidth - 250,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      }}>
      <Carousel
        layout={'default'}
        ref={(ref) => (this.carousel = ref)}
        data={data}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        renderItem={this._renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bacgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  corousalContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: screenWidth - 60,
    flex: 1,
  },
  scoreCardContainer: {
    width: screenWidth,
    flexDirection: 'row',
    paddingTop: 12,
  },

  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  teamTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 16,
    color: 'white',
  },
  locationText: {
    fontSize: 12,
    paddingLeft: 16,
    color: '#d7d7d7',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 16,
    color: 'white',
    paddingTop: 8,
  },
});
export default MatchSection;
