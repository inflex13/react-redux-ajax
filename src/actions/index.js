import axios from 'axios';

const API_KEY = '72556d990f5eda35889bf1ecafeecafe';
const ROOT_RUL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city = null) {

    const url = `${ROOT_RUL}&q=${city}`;
    const req = axios.get(url);

    return {
        type   : FETCH_WEATHER,
        payload: req
    }
}