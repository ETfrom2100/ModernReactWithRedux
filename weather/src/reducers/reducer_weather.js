import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){
	//console.log('action received:',action);
	switch(action.type)
	{
		case FETCH_WEATHER:
			//return a new instance of the state
			//return state.concat([action.payload.data]); 
			return [action.payload.data, ...state]; //ES6 syntax [city, city, city..]
			break;
	}
	return state;
}