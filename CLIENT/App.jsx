import React, { Component } from 'react';
import './stylesheets/styles.css';
import Main from './components/Main';

const App = props => {
    return (
        <div>
        <main id='body' >
          < Main />
        </main>
      </div>
    );
};

export default App; 