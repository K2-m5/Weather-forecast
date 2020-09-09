import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavBar } from '../NavBar/NavBar';
import MapPanel from '../MapPanel/MapPanel';

export default function App() {

  return (
    <View style={styles.container}>
      <NavBar />
      <MapPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});