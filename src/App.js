import React, { Component } from 'react';
import './App.css';
import NavBar from './components/content.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KiK: Kiswahili in Kigali</h1>
        <NavBar />
      </div>
    );
  }
}

export default App;
