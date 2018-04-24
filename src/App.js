import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Redirect to="/portfolio" push />
				<Route path="/portfolio" component={Portfolio} />
			</div>
		);
	}
}

export default App;
