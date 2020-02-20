import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Person name="Dax">Hello I am naughty</Person>
      <Person name="Ham">
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>
      </Person>
      <Person name="Lam" />
    </div>
  );
}

export default App;
