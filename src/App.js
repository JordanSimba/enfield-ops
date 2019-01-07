import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
