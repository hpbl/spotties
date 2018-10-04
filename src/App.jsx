import React from 'react';
import './App.css';
import logo from './logo.svg';
import setPageTitle from './helper';

// const clientId = '139b330668894b13b5d959cb947966da';
// const clientSecret = '0046d6777a414dbf90434dc6fdd0b0c0';
// const redirectURI = 'https://hpbl.github.io/spotties/';
// const scope = 'user-read-private user-read-email user-read-playback-state';

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
