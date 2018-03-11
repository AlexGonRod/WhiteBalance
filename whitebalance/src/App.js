import React, { Component } from 'react';
//import Login from './components/login'
import Header from './components/header'
import Jumbotron from './components/jumbotron'

import ImageList from './components/ImageList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        
        <ImageList />  
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
