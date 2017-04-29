import React, { Component } from 'react';
import ListBox from './ListBox.js'
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Nav, NavItem, handleSelect } from 'react-bootstrap';
class ScheduleMatches extends React.Component {


     constructor(props) {
    super(props);

    this.state = {
      sel: 1
    }

    this.updateState = this.updateState.bind(this);

  };

   updateState(selectedKey) {
           if(selectedKey==1){
    this.setState({ sel: 1 })

  }
           if(selectedKey==2){
    this.setState({ sel: 2 })

  }
  }
render() {
     const MatchDetails = this.state.sel==2 ? <PreviousMatches/> : <UpcomingMatches/>
return(

     <div className="Matechstye">
        <Nav bsStyle="pills" activeKey={this.state.sel} onSelect={this.updateState} >
          <NavItem eventKey={1} >Upcoming Matches</NavItem>
          <NavItem eventKey={2} >Previous Matches</NavItem>
        </Nav>
        {MatchDetails}
      </div>

);
}
}
class PreviousMatches extends Component {
  render() {
   // const TeamData = this.state.showTableRow=='RCB'  ? <p>imran</p> : null;
    return (
<div>
  <table >
  <tr className="header">
    <th className="fontcolorwhite">Team A</th>
     <th className="fontcolorwhite">Team B</th>
    <th className="fontcolorwhite">Venue</th> 
    <th className="fontcolorwhite">Details</th>
  </tr>
    <tr >
    <th className="wonstyle"> <img src="kkr.png" height="35" width="50" /> KKR</th>
     <th ><img src="rps.png" height="35" width="50" /> RPS</th>
    <th >Kolkata</th> 
    <th >KKR won by 71 runs</th>
  </tr>
    <tr >
    <th > <img src="rcb.png" height="35" width="50" />RCB</th>
     <th className="wonstyle"><img src="rps.png" height="35" width="50" />RPS</th>
    <th >Pune</th> 
    <th >RPS won by 21 runs</th>
  </tr>
    <tr >
    <th className="wonstyle"><img src="kkr.png" height="35" width="50" /> KKR</th>
     <th ><img src="rps.png" height="35" width="50" />RPS</th>
    <th >Pune</th> 
    <th >KKR won by 31 runs</th>
  </tr>
      <tr >
    <th className="wonstyle"><img src="rcb.png" height="35" width="50" />RCB</th>
     <th ><img src="kkr.png" height="35" width="50" />KKR</th>
    <th >Banglore</th> 
    <th >RCB won by 61 runs</th>
  </tr>
  </table>
</div>
    );
  }
}
class UpcomingMatches extends Component {
  render() {
   // const TeamData = this.state.showTableRow=='RCB'  ? <p>imran</p> : null;
    return (
<div>
  <table >
  <tr className="header">
    <th className="fontcolorwhite">Team A</th>
     <th className="fontcolorwhite">Team B</th>
    <th className="fontcolorwhite">Venue</th> 
    <th className="fontcolorwhite">Date</th>
  </tr>
    <tr >
         <th ><img src="rps.png" height="35" width="50" /> RPS</th>
    <th> <img src="kkr.png" height="35" width="50" /> KKR</th>
    
    <th >Pune</th> 
    <th >30th April 17</th>
  </tr>
    <tr >
        <th ><img src="rps.png" height="35" width="50" />RPS</th>
    <th > <img src="rcb.png" height="35" width="50" />RCB</th>
     
    <th >Banglore</th> 
    <th >2nd May 2017</th>
  </tr>
    <tr >
        <th ><img src="rps.png" height="35" width="50" />RPS</th>
    <th ><img src="kkr.png" height="35" width="50" /> KKR</th>
     
    <th >Mumbai</th> 
    <th >4th May 2017</th>
  </tr>
      <tr >
            <th ><img src="kkr.png" height="35" width="50" />KKR</th>
    <th ><img src="rcb.png" height="35" width="50" />RCB</th>
   
    <th >Pune</th> 
    <th >5th May 2017</th>
  </tr>
  </table>
</div>
    );
  }
}
export default ScheduleMatches;