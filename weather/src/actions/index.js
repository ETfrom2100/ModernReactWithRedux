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
	//axios returns a promise, which is a data structure
	const request = axios.get(url);
	
	//console.log('Request:',request);
	return {
		type:FETCH_WEATHER,
		payload:request //returning the promise as the payload. redux-promise unwrap the original promise and send the data as the payload
	};
	
}