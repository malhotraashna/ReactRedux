import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './containers/displayUser';

class App extends Component {
  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

export default App;
