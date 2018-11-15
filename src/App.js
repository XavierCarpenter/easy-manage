import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      {routes}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href={process.env.REACT_APP_LOGIN}>
          <button className="App-link">
           Login
          </button>
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
