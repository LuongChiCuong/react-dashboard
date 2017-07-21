import React, { Component } from 'react';
import Navigation from './Navigation';
import MainContent from './Main';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <MainContent></MainContent>
      </div>
    );
  }
}

export default App;
