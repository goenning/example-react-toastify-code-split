import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { notify } from './notify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={() => notify("Hello World")} src={logo} className="App-logo" alt="logo" />
          <p>
            Click on the logo
          </p>
        </header>
      </div>
    );
  }
}

export default App;
