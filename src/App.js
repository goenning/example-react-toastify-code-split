import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    hasContainer: false
  };

  alert = (text) => {
    import('./notify').then(module => {
      this.setState({ hasContainer: true })
      module.notify(text)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={() => this.alert("Hello World")} src={logo} className="App-logo" alt="logo" />
          <p>
            Click on the logo
          </p>
        </header>
      </div>
    );
  }
}

export default App;
