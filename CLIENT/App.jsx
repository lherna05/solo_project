import React, { Component } from 'react';
import './stylesheets/styles.css';
import Main from './components/Main';

const App = props => {
    return (
        <div >
          <header>
            Bug Log
          </header>
        <main >
          < Main id=".main"/>
        </main>
      </div>
    );
};

export default App; 