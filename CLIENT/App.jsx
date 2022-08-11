import React, { Component } from 'react';
import './stylesheets/styles.css';
import Main from './components/Main';
// import * from './assets';

const App = props => {
    return (
        <div>
          <header>
            <img src="/logo.png" />
          </header>
        <main id='.main' >
          < Main />
        </main>
      </div>
    );
};

export default App; 