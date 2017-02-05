import {FETCH_POSTS} from '../actions/index';
const INITIAL_STATE = {all:[],post:null}; //all will store a list of posts, post will store the single active post


export default function(state=INITIAL_STATE,action){
	
	switch(action.type)
	{
		case FETCH_POSTS:
			return {...state,all:action.payload.data}; //return a new object which contains whatever the current state is and a list of posts
		default:
			return state;
	}
	
}