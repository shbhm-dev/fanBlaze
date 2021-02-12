import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
const TeamDetails = (props) => {
  return (
    <View style={styles.scoreCardContainer}>
      <Image
        source={require('../assets/pak/group-20.png')}
        resizeMode="cover"
        style={styles.icon}
      />
      <View style={styles.container}>
        <Text style={styles.teamTitle}>{props.value}</Text>
        <Text style={styles.overs}>139/2(49 Over)</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 20,
    // backgroundColor : 'black',
  },
  teamTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
  },
  scoreCardContainer: {
    width: screenWidth - 60,
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 16,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  overs: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 16,
  },
});
export default TeamDetails;
