import React from 'react';
import MapView, { AnimatedRegion, Animated,  } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ApiService from '../../api-service/ApiService';

export default class MapPanel extends React.Component {

  constructor() {
    super()
    this.api =new ApiService();
  }

  state = {
    ltd: null,
    lng: null
  }

  updateMap() {
    this.api.getDataPlace()
    .then((coordinate) => {
      this.setState({ 
        ltd: Number(coordinate.ltd),
        lng: Number(coordinate.lng)
       });
    });
  }

  componentDidMount() {
    this.updateMap();
  }

  render() {

    const { ltd, lng } = this.state;

    return (
      <View style={styles.container}>
        <MapView 
          style={styles.mapStyle}
          initialRegion={{
            latitude: ltd,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});