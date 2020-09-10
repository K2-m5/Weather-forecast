import WeatherApi from './weather-forecast-api';
import CoordUserFetch from './user-place-api';
import PlaceCoordinateApi from './place-coordinate-api';
import data from './data';

export default class ApiService {
  constructor() {
    this.weatherApi = new WeatherApi();
    this.userPlaceApi = new CoordUserFetch();
    this.placeCrdApi = new PlaceCoordinateApi();
  }

  async getStartData() {
    const dataPlace = await this.userPlaceApi.getPlaceByIp();
    data.coordinate.ltd = dataPlace.loc.slice(0, dataPlace.loc.indexOf(','));
    data.coordinate.lng = dataPlace.loc.slice(dataPlace.loc.indexOf(',') + 1);
    data.city = dataPlace.city;
    data.country = dataPlace.country;
    const dataWeather = await this.weatherApi.getDataWeather(data.coordinate.lng, data.coordinate.ltd);
    this.provideDataWeather(dataWeather);

    return data;
  }

  provideDataWeather(dataWeather) {
    data.weather.feelLikes = dataWeather.main.feels_like;
    data.weather.temp = dataWeather.main.temp;
    data.weather.humidity = dataWeather.main.humidity;
    data.weather.description = dataWeather.weather[0].description;
    data.weather.icon = dataWeather.weather[0].icon;
    data.weather.wind = dataWeather.wind.speed;
  }


  async getDataUserRequest(city) {
    const dataWeather = await this.weatherApi.getDataWeatherByCity(city);
    this.provideDataWeather(dataWeather);

    return data;
  }
}
