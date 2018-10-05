import React from 'react';
import './App.css';
import setPageTitle from './helper';
import Search from './Search/Search';

function App() {
  setPageTitle();
  return (
    <div className="App">
      <div>
        <h1>spotties</h1>
        <p>all your favorite artist&apos;s songs in a single playlist</p>
      </div>
      {/* <input type="text" placeholder="search for artists you love ♥" /> */}
      <Search placeholder="search for artists you love ♥" />
    </div>
  );
}


export default App;
