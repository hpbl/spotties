import React from 'react';
import './App.css';
import logo from './logo.svg';
import setPageTitle from './helper';

function App() {
  setPageTitle();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to spotties!!</h1>
      </header>
      <p className="App-intro">
          To get started, edit
        {' '}
        <code>src/App.js</code>
        {' '}
and save to reload.
      </p>
    </div>
  );
}


export default App;
