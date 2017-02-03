import axios from 'axios';
const API_KEY = '7ae59035c0dcb374826994830b6d6d11';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //ES6 syntax
//action creator always return a action
export const FETCH_WEATHER = 'FETCH_WEATHER';
//export without default means a "named export"
//ex. import {fetchWeather} from ...
//don't have to use {} when it's a export default
export function fetchWeather(city){
	
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return {
		type:FETCH_WEATHER,
		payload:request
	};
	
}