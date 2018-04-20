import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile/Profile.js';
import Timeline from './components/Timeline/Timeline.js';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Profile/>
			<Timeline/>
		</div>
    );
  }
}

export default App;
