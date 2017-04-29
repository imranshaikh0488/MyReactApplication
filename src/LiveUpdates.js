import React, { Component } from 'react';
import ListBox from './ListBox.js'
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
class LiveUpdates extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showTableRow: false,
      MatchA: 'KKR',
      score: 200
    }

    this.updateState = this.updateState.bind(this);
     this.GetUpdates = this.GetUpdates.bind(this);

  };

  updateState() {
    this.setState({ showTableRow: true })

  }
  GetUpdates() {
var runs=1+this.state.score;
  this.setState({ score: runs })
//alert(runs);

  }
  render() {

    const jumbotronInstance = (
      <Jumbotron width="4" className="App-Live">

        <h3 >Live Match</h3>

    <p>
          <img src="kkr.png" height="50" width="80" />
          KKR : 
          {this.state.score}
           /6
          
          <Button bsStyle="info" className="mybuton" onClick={this.GetUpdates}>Refresh</Button>
         
    </p>
        <p>
          <img src="rps.png" height="50" width="80" />
          RPS :Still to Bat
        </p>
       
      </Jumbotron>
    );
    return (
      <div>
        {jumbotronInstance}
      </div>
    );
  }
}

export default LiveUpdates;