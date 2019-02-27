import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import NavContainer from './NavContainer';


class App extends Component {
  render() {
    return (

      <div className='app'>
        <NavContainer />
        <Main />
      </div>
    );
  }
}

export default App;