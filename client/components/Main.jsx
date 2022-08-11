import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomeDisplay from './WelcomeDisplay';
import LogContainer from './LogContainer';

//BELOW: <single_log/> will be replaced with {Single Logs} --> add functionality to render all single log components 
class Main extends Component {

  render() {
  return (
    <div>
    <section>
      <h3>What are we learning today? </h3>
      <WelcomeDisplay />
    </section>
    <section>
       <LogContainer />
    </section>  
  </div>  
  )
}

}
export default Main; 


  