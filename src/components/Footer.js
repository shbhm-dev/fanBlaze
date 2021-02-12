import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.corouselBottomText}>{`${props.val} Choose to Bat`}</Text>
      <Text style={styles.ccrText}>{`CCR ${props.val}`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  corouselBottomText: {
    fontSize: 12,
    paddingLeft: 16,
    position: 'absolute',
    color: '#d7d7d7',
    bottom: 0,
  },
  ccrText: {
    fontSize: 12,
    position: 'absolute',
    color: '#d7d7d7',
    bottom: 0,
    right: 16,
  },
});
export default Footer;
