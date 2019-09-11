import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './header.js';
import TodoList from './todolist.js';

class App extends Component {
  render() {
      return ( <div className = "App">
          <header className = "App-header" >
          <img src = { logo }
          className = "App-logo"
          alt = "logo" />
          <p>Edit <code> src / App.js </code> and save to reload.hello</p>
          <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" > Learn React </a>
          </header>
          <Clock />
          <TodoList />          
          </div>
      );
  }
}

export default App;