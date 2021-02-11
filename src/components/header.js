import React,{useState,useEffect} from "react"
import { SafeAreaView, StyleSheet,Dimensions,FlatList, View, Text, StatusBar ,Image,Button} from "react-native"
import headerAPI from '../api/headerSeries'
const { width: screenWidth } = Dimensions.get('window')
const Header = () => {
  const [resData,setresData] = useState(null)
  const getHeaderData = async () => {
    const response = await headerAPI.get()
    console.log(`hello ${response.data.series}`)
    setresData(response.data)
    
  
  }
  useEffect(() => {
    getHeaderData()
     }, [])

     if(!resData)
     {
         return null
     }
  
    return (
      <View style = {{width:screenWidth,backgroundColor:'white',marginTop:40}}>
      <View style = { style.header }>
        <Image style = {style.headerImage} source={require('../assets/fanblazeLogo/logo.png')}/>
        <Text style = {style.headerText}>FanBlaze</Text>
        </View>
    <FlatList   
    horizontal
    data={resData.series}
        renderItem={({item}) => <Button styles = {{paddingLeft:16}}color='black' title = {item.short_name}/>}
        keyExtractor={item => item.id}/>
      </View>
    )
  }
  const style = StyleSheet.create({
    header : {
      width:screenWidth,
      justifyContent : 'flex-start',
      flexDirection : 'row',
    },
    headerText : {
      marginLeft:10,
      fontSize : 25,
      fontFamily : 'HelveticaNeue-Medium',
      fontWeight : 'bold'
    },
    headerImage : {
      height : 30,
      width : 25,
      paddingLeft:50
    }
  
  })
  export default Header
  