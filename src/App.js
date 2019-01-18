import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Bar.js';
import Slider from './components/Slider.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Slider />
      </div>
    );
  }
}

export default App;
