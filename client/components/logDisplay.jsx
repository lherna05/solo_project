import React, { Component } from 'react';
import './../stylesheets/styles.css';
import Single_Log from './SingleLog';

class LogDisplay extends Component {
constructor() {
  super();
  this.state = {
    logs: [],
  }

}
componentDidMount() {
  fetch(this.props.logs)
    .then(response => response.json())
    .then(data => this.setState((logs) => {
      return {logs: [...data]}
    }))
}
 render() {  
  const {id, title, resolved, note, allLogs, updateLog, deleteLog} = props; 

    const logs = [];

    for (let i = 0; i < allLogs.length; i++){
      const current = this.state.logs[i];
        logs.push(
            <Single_Log 
            info={current}
            />
        );
    };
  
  return(
    <section>
        <h3>Bug Logs</h3>
            {logs}
    </section>
  )
}
}
export default LogDisplay; 