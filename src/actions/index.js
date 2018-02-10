import axios from 'axios';

const API_KEY = 'ae4185bbf9c70b5658c59fbc9de29b8a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

//Use constants to be consistent and avoid errors
export const FETCH_WEATHER = 'Fetch Weather';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
