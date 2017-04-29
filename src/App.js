import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './Button.js'
import ListBox from './ListBox.js'
import StatePlace from './StatePlace.js'
import LiveUpdates from './LiveUpdates.js'
import DataTable from './TableRow.js'
import { Well } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import HeaderContent from './HeaderContent.js'
import { Button } from 'react-bootstrap';
import { Nav, NavItem , handleSelect} from 'react-bootstrap';
      
 // <HeaderContent className="TestPositionCheck"/>

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Indian Premiere League - Cricket</h1>
        </div>
       <LiveUpdates/>
      
       <ListBox/>
      </div>

    );
  }

}

export default App;
