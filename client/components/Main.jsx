import React, { Component } from 'react';
import Log_Display from './Log_Display';
import Single_Log from './Single_Log';

//BELOW: <single_log/> will be replaced with {Single Logs} --> add functionality to render all single log components 

render() {
  
  return (
    <section>
        <header>
            <h2> Welcome to Bug Log!</h2>
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

export default Main; 