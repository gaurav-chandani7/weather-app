import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={apiCall}>
          Api Call
        </button>
      </header>
    </div>
  );
}

const apiCall = async () => {
  let res = await fetch("http://api.weatherapi.com/v1/current.json?key=333fc7460b094d599cb182609222602&q=mumbai")
  let data = await res.json();
  console.log(data);
}

export default App;
