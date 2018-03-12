import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Home /> 

        </div>
      </HashRouter>
    );
  }
}

export default App;
