import React, { Component } from 'react';
import { render } from 'react-dom';
import './../stylesheets/styles.css';

class WelcomeDisplay extends Component {
    render() {
        return (
            <div>
                <h2>Today's Reminder: “Errors are rich in information” - Nicholas Taleb </h2>
            </div>  
        )
    }
}

export default WelcomeDisplay; 