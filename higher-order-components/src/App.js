import logo from './logo.svg';
import './App.css';
import React from "react";
import { Component } from 'react';
import "./components/ButtonOne";
import ButtonOne from './components/ButtonOne';

class App extends Component{
  render(){
    return (
      <div className="App">
        <ButtonOne disable />
      </div>
    )
  }
}

export default App;
