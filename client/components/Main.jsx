import React, { Component } from 'react';
import Single_Log from './Single_Log';
import popUp from './popUp';

//BELOW: <single_log/> will be replaced with {Single Logs} --> add functionality to render all single log components 
class Main extends Component {
render() {
  
  return (
    <section>
        <header>
            <h2> THIS IS WORKING (HELLO FROM REACT) </h2>
            <button>+</button>

        </header>
        <div>
            <div> 
                < Single_Log />
            </div>
        </div>
    </section>
  )
}; 
}

export default Main; 


