import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDCDYzzx_qTJrXXesEwt0CLPeMvMK1jcW8';
const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('.container'));
