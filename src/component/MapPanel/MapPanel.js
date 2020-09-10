import React from 'react';
import MapView, { AnimatedRegion, Animated, } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ApiService from '../../api-service/ApiService';
import SearchPanel from '../SearchPanel/SearchPanel';

export default class MapPanel extends React.Component {

  constructor() {
    super()
    this.api = new ApiService();
  }

  state = {
    ltd: null,
    lng: null,
    city: '',
    country: '',
    temp: null,
    feelLikes: null,
    humidity: null,
    description: '',
    wind: null,
  }

  updateMap() {
    this.api.getStartData()
    .then((data) => {
      this.setState({ 
        ltd: Number(data.coordinate.ltd),
        lng: Number(data.coordinate.lng),
        city: String(data.city),
        country: String(data.country),
        temp: data.weather.temp,
        humidity: data.weather.humidity,
        description: data.weather.description,
        wind: data.weather.wind,
       });
    });
  }

  updateMapAfterSearch(text) {
    this.api.getDataUserRequest(text)
      .then((data) => {
        this.setState({ 
          ltd: Number(data.coordinate.ltd),
          lng: Number(data.coordinate.lng),
          city: String(data.city),
          country: String(data.country),
          temp: data.weather.temp,
          humidity: data.weather.humidity,
          description: data.weather.description,
          wind: data.weather.wind,
         });
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.inputValue !== prevProps.inputValue) {
      this.updatePerson();
    }
  }

  onPressBtnSearch = (text) => {
    this.setState({ 
      city: String(text),
     });
  }

  componentDidMount() {
    this.updateMap();
  }

  render() {

    const { ltd, lng, city, country, temp, feelLikes, 
      humidity, description, wind } = this.state;

    return (
      <View style={styles.container}>

        <View>
          <SearchPanel 
            onPressBtnSearch={this.onPressBtnSearch}/>
        </View>


        <MapView 
          style={styles.mapStyle}
          initialRegion={{
            latitude: ltd,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />

        <View style={styles.infoStyle}>
            <Text style={styles.text}>{city}</Text>
            <Text style={styles.text}>{country}</Text>
            <Text style={styles.text}>{temp}</Text>
            <Text style={styles.text}>{humidity}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{wind}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {


  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
  },
  infoStyle: {
    alignContent: 'stretch',
  },
  text: {
    height: 40,
    marginBottom: 3,
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#393939',
  }
});