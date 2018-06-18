import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from './Hero';
import Content from './Content';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <Content/>
      </div>
    );
  }
}

export default App;
