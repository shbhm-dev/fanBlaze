import React, { useEffect } from "react"
import { SafeAreaView, StyleSheet,PixelRatio, View, Text, StatusBar ,Image, ImageBackground, FlatList, Button} from "react-native"
import Carousel,{ ParallaxImage } from 'react-native-snap-carousel';
import scoreCards from '../api/scoreCards'
import {Dimensions} from 'react-native';
import { useState } from "react";
import {
  BarIndicator,
} from 'react-native-indicators';

const { width: screenWidth } = Dimensions.get('window')

const MatchSection = () => {
  const [scoreRes,setscoreRes] = useState(null)

getScoreCardResults = async () => {
  const response = await scoreCards.get()
  setscoreRes(response.data)
}

  useEffect(() => {
    getScoreCardResults()
  },[])

  if(!scoreRes)
  {
    return null
  }
const carouselItems = [
  {
      title:"Stupms",
      text: "Old Traffrd Manchester",
      team1 : "IND",
      team2 : "PAK",
      toss: "IND",
      ccr : '2.83',

  },
  {
    title:"Stupms",
    text: "Old Traffrd Manchester",
    team1 : "IND",
    team2 : "PAK",
    toss: "IND",
    ccr : '2.83',
  },
  {
    title:"Stupms",
    text: "Old Traffrd Manchester",
    team1 : "IND",
    team2 : "PAK",
    toss: "IND",
    ccr : '2.83',
  },
  {
    title:"Stupms",
    text: "Old Traffrd Manchester",
    team1 : "IND",
    team2 : "PAK",
    toss: "IND",
    ccr : '2.83',
  },
  {
    title:"Stupms",
    text: "Old Traffrd Manchester",
    team1 : "IND",
    team2 : "PAK",
    toss: "IND",
    ccr : '2.83',
  },
]

_renderItem = ({ item }) => {
 
    return (
      <View style={styles.corousalContainer}>
      <ImageBackground source={require('../assets/corouselImage/bitmap.png')} style={styles.bacgroundImage}>
      <Text style={styles.mainTitle}>{item.title}</Text>
      <Text style={styles.locationText}>{item.text}</Text>
     
      <View style={styles.scoreCardContainer}>
      <Image source={ require('../assets/pak/group-20.png')} style={styles.iconImage} />
         <Text style={styles.teamTitle}>{item.team2}</Text>
         <Text style={{fontSize: 14,fontWeight:'bold',color:'white',paddingLeft:130,paddingRight:30}}>139/2(49 Over)</Text>
        </View>


      <View style={styles.scoreCardContainer}>
      <Image source={ require('../assets/pak/group-20.png')}
              style={styles.iconImage} />
         <Text style={styles.teamTitle}>{item.team2}</Text>
        </View>


       

      <Text style={styles.corouselBottomText}>{`${item.toss} Choose to Bat`}</Text>
      <Text style={styles.ccrText}>{`CCR ${item.ccr}`}</Text>
      </ImageBackground>
      </View>
    )
  }
  
    return (
             
            <View style={{ height :  screenWidth - 250, flexDirection:'row', justifyContent: 'center', marginTop:20}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={carouselItems}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 60}
                  renderItem={this._renderItem}
                 
               />
               
            </View>
             
        
          
    )
  
  }
  const styles = StyleSheet.create({
    bacgroundImage: {
      flex: 1,
      width: null,
      height: null,
    },
    corousalContainer : 
      {
        backgroundColor:'red',
        borderRadius: 10,
        width: screenWidth - 60,
        flex:1
       },
       scoreCardContainer : {
          width : screenWidth-60,
          flexDirection:'row',
          paddingTop : 8
         
       },
       corouselBottomText : 
        {
          fontSize: 15,
          paddingLeft:16,
          position: 'absolute',
          color:'#d7d7d7',
          bottom:0
        },
        ccrText : {
          fontSize: 15,
          position: 'absolute',
          color:'#d7d7d7',
          bottom:0,
          right:8
        },
        iconImage : {
          width: 20, 
            height: 20,
            paddingLeft:16,
            borderRadius: 250 / 2,
            overflow: "hidden",
            borderColor: "red"
            
        },
        teamTitle : {
          fontSize: 14,
          fontWeight:'bold',
          paddingLeft:16,
          color:'white'
        },
        locationText :{
        fontSize: 15,
        paddingLeft:16,
        color:'#d7d7d7'
      },
      mainTitle : {
        fontSize: 20,
        fontWeight:'bold',
        paddingLeft:16,
        color:'white'
      }
        
        
       
    
    
})
  export default MatchSection
  