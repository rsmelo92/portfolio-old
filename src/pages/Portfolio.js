import React, { Component } from 'react';
import Profile from '../components/Profile/Profile.js';
import Timeline from '../components/Timeline/Timeline.js';

class Portfolio extends Component {
    render(){
        return(
            <div>
                <Profile/>
			    <Timeline/>
            </div>
        )
    }
}

export default Portfolio;