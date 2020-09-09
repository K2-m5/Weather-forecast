import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const NavBar = () =>{
  return(
    <View style={styles.navbar}>
      <Text style={styles.text}>Weather forecast</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#393939',
    paddingBottom: 10
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
})