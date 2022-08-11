import React, { Component } from 'react';
import './../stylesheets/styles.css';
import Single_Log from './SingleLog';


class LogDisplay extends Component {
constructor() {
  super();
  this.state = {
    logs: [
      {
          "id": 1,
          "title": "Webpack Failed",
          "resolved": true,
          "note": "Webpack failed to Compiler. Error said to install webpack-cli",
          "created_at": "2022-08-11T22:10:41.751Z",
          "updated_at": "2022-08-11T22:10:41.751Z"
      },
      {
          "id": 2,
          "title": "POSTGRES login fail",
          "resolved": true,
          "note": "Could not access psql commands - password failing. Could not locate pg_hba.conf.",
          "created_at": "2022-08-11T22:11:57.963Z",
          "updated_at": "2022-08-11T22:11:57.963Z"
      },
      {
          "id": 3,
          "title": "GET REQUEST ERROR",
          "resolved": true,
          "note": "Had types in route and controller that was stopping execution.",
          "created_at": "2022-08-11T22:12:09.786Z",
          "updated_at": "2022-08-11T22:12:09.786Z"
      },
      {
          "id": 4,
          "title": "View Single Log Error",
          "resolved": true,
          "note": "Had types in route and controller that was stopping execution.",
          "created_at": "2022-08-11T22:12:21.464Z",
          "updated_at": "2022-08-11T22:12:21.464Z"
      },
      {
          "id": 5,
          "title": "Patch Req Error",
          "resolved": true,
          "note": "Not executing past queryStr const. Resolved: need to use single quotes in the queryStr.",
          "created_at": "2022-08-11T22:12:35.599Z",
          "updated_at": "2022-08-11T22:12:35.599Z"
      },
      {
          "id": 6,
          "title": "Delete Req Error",
          "resolved": true,
          "note": "Needed to fix typo.",
          "created_at": "2022-08-11T22:12:47.242Z",
          "updated_at": "2022-08-11T22:12:47.242Z"
      },
      {
          "id": 7,
          "title": "Terminal Crash in VS Code",
          "resolved": true,
          "note": "ZSH was clashing w/ VS Code. Edited in JSON to fix.",
          "created_at": "2022-08-11T22:12:59.524Z",
          "updated_at": "2022-08-11T22:12:59.524Z"
      }
  ],
  }
}
componentDidMount() {
  fetch('http://localhost:3000/', {
    headers: {
    "Content-Type": "application/json"
  }, 
  method: "GET", 
  mode: "no-cors"
}
  )
  .then(data => {
  return data.json()
  })
  .then( (data) => {
  this.setState({
    logs: [...data]
  });
  });
}
 render() {  
  // const {id, title, resolved, note, allLogs, updateLog, deleteLog} = props; 
  const testLogs = [...this.state.logs];
  const logComponents = []
  console.log(testLogs)
    for (let i = 0; i < testLogs.length; i++){
      const current = testLogs[i];
      logComponents.push(
            <Single_Log 
            info={current}
            />
        );
    };
  
  return(
    <section>
        <h3>Bug Logs</h3>
            {logComponents}
    </section>
  )
}
}
export default LogDisplay; 