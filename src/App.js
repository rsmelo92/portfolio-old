import React from 'react';
import { Route } from 'react-router-dom'

import Portfolio from './pages/Portfolio';
import './App.css';

export const App = () => (
	<div className="App">
		<Route path="/portfolio" component={Portfolio} />
	</div>
);


export default App;
