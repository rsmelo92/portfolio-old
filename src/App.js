import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/portfolio" component={Portfolio} />
			</div>
		);
	}
}

export default App;
