import React, { Component } from 'react';
import {Table} from 'react-materialize';
// import logo from './logo.svg';
import './Main.css';

class MainContent extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    return (
      <div className="App-main">
        <div className="main-header">
          <h1 className="main-title">Bookmarks List</h1>
        </div>
        <div className="main-content">
           <Table centered hoverable responsive>
          	<thead>
          		<tr>
          			<th data-field="id">Name</th>
          			<th data-field="url">URL</th>
          			<th data-field="tag">Tags</th>
                <th data-field="date">Created Date</th>
          		</tr>
          	</thead>

          	<tbody>
          		<tr>
          			<td>Alvin</td>
          			<td>Eclair</td>
          			<td>$0.87</td>
                <td>$0.87</td>
          		</tr>
          		<tr>
          			<td>Alan</td>
          			<td>Jellybean</td>
          			<td>$3.76</td>
                <td>$0.87</td>
          		</tr>
          	</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default MainContent;
