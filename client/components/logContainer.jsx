import React, { Component } from 'react';
import { render } from 'react-dom';
import './../stylesheets/styles.css';
import AddLog from './AddLog';
import LogDisplay from './LogDisplay';

class LogContainer extends Component {
  render() {
    return (
        <div>
        <section>
          <AddLog />
        </section>
        <section>
           <LogDisplay />
        </section>
      </div>  

    ) 
}
}
export default LogContainer; 