import React, { Component } from 'react';
import { Nav, NavItem, handleSelect } from 'react-bootstrap';
import HeaderContent from './HeaderContent.js'
class ListBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showTableRow: 'KKR',
      sel:1
    }
    this.updateState = this.updateState.bind(this);
  };


updateState(selectedKey) {
  //alert('selected ' + selectedKey);
    if(selectedKey==1){
    this.setState({ showTableRow: 'KKR' })
    this.setState({ sel: 1 })

  }
  if(selectedKey==2){
    this.setState({ showTableRow: 'RCB' })
     this.setState({ sel: 2 })
  }
   if(selectedKey==3){
    this.setState({ showTableRow: 'RPS' })
    this.setState({ sel: 3 })
  }

  }
  render() {
    const TeamData = this.state.showTableRow=='RCB'  ? <RCBData/> : this.state.showTableRow=='KKR'  ? <KKRData/> : this.state.showTableRow=='RPS'  ? <RPSData/> : null;
    return (
      <div>
        <Nav bsStyle="pills" activeKey={this.state.sel} onSelect={this.updateState} >
          <NavItem eventKey={1} >KKR</NavItem>
          <NavItem eventKey={2} >RCB</NavItem>
          <NavItem eventKey={3} >RPS</NavItem>
        </Nav>
        {TeamData}

      </div>
    );
  }
}
class KKRData extends Component {

  render() {
   //const TeamData = this.state.showTableRow=='RCB'  ? <RCBData/> : null;
    return (
<div>
  <p> <b>Name : Gautam Gambhir (Captain)</b>   Total Runs:  300</p>
  <p> <b>Name : Manish Pandey </b>   Total Runs:  350</p>
  <p> <b>Name : Robin Uttapa </b>   Total Runs:  310</p>
  <p> <b>Name : Yousuf Pathan </b>   Total Runs:  150</p>
  <p> <b>Name : Sunil Naraiane</b>   Total Runs:  80</p>
</div>
    );
  }
}
class RCBData extends Component {
  render() {
   // const TeamData = this.state.showTableRow=='RCB'  ? <p>imran</p> : null;
    return (
<div>
  <p> <b>Name : Virat Kohli (Captain)</b>   Total Runs:  300</p>
  <p> <b>Name : Gayle </b>   Total Runs:  350</p>
  <p> <b>Name : A B Devellers </b>   Total Runs:  310</p>
  <p> <b>Name : Shane Watson </b>   Total Runs:  150</p>
  <p> <b>Name : Chahal</b>   Total Runs:  80</p>
</div>
    );
  }
}
class RPSData extends Component {
  render() {
   // const TeamData = this.state.showTableRow=='RCB'  ? <p>imran</p> : null;
    return (
<div>
  <p> <b>Name : M S Dhoni (Captain)</b>   Total Runs:  300</p>
  <p> <b>Name : Steve Smith </b>   Total Runs:  350</p>
  <p> <b>Name : Imran Tahir </b>   Total Runs:  310</p>
  <p> <b>Name : A Rahane </b>   Total Runs:  150</p>
  <p> <b>Name : A Thakur</b>   Total Runs:  80</p>
</div>
    );
  }
}
export default ListBox;