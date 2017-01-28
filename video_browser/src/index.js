import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDCDYzzx_qTJrXXesEwt0CLPeMvMK1jcW8';

YTSearch({key:API_KEY, term:'surfboards'},function(data){
	console.log(data);
});


class App extends Component{
	render(){
		return (
			<div>
				<SearchBar/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
