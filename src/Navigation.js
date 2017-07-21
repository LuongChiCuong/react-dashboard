import React, { Component } from 'react';
import {Icon} from 'react-materialize';
// import logo from './logo.svg';
import './Navigation.css';
// <Icon tiny>bookmark</Icon>{item}

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    const items = ["Overal", "Bookmarks", "Category", "E-books", "Accounts"];
    const listMenu = items.map((item, index) =>
      <li key={index}>
        {item}
      </li>
    );
    return (
      <div className="App-navigation">
        <h2 className="App-logo">DashBoard</h2>
        <div className="App-menu">
          <ul>
            {listMenu}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
