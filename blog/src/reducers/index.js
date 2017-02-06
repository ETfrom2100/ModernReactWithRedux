import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form'; //import redux form and grab the reducer property out of it and name it formReducer

const rootReducer = combineReducers({
  posts:PostsReducer, 
  form:formReducer
});

export default rootReducer;
