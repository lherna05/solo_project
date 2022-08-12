import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomeDisplay from './WelcomeDisplay';
import LogContainer from './LogContainer';

//BELOW: <single_log/> will be replaced with {Single Logs} --> add functionality to render all single log components 
class Main extends Component {

  render() {
  return (
    <div id="main">
    <section id="main">
      <h1 id="main">Welcome to Bug Log!</h1>
      <h3 id="main"><em>What are you learning today?</em> </h3>
      <WelcomeDisplay id="main" />
    </section>
    <section>
       <LogContainer />
    </section>  
  </div>  
  )
}

}
export default Main; 


  