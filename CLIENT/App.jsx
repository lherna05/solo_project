import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/styles.css';
import Main from './components/Main';

class App extends Component {
   
 render(){
    return (
        <div >
          < Main />
      </div>
    );
  }
}

export default App; 
// ReactDOM.render(<App />, document.getElementById('app'));