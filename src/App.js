import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Main from './Components/Presentational/Main';

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Main {...props}></Main>
  </div>
)

export default App;
