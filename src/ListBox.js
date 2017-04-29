import React, { Component } from 'react';
import { Nav, NavItem, handleSelect } from 'react-bootstrap';
import HeaderContent from './HeaderContent.js'
class ListBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showTableRow: 'KKR',
      sel: 1
    }
    this.updateState = this.updateState.bind(this);
  };


  updateState(selectedKey) {
    //alert('selected ' + selectedKey);
    if (selectedKey == 1) {
      this.setState({ showTableRow: 'KKR' })
      this.setState({ sel: 1 })

    }
    if (selectedKey == 2) {
      this.setState({ showTableRow: 'RCB' })
      this.setState({ sel: 2 })
    }
    if (selectedKey == 3) {
      this.setState({ showTableRow: 'RPS' })
      this.setState({ sel: 3 })
    }

  }
  render() {
    const TeamData = this.state.showTableRow == 'RCB' ? <RCBData /> : this.state.showTableRow == 'KKR' ? <KKRData /> : this.state.showTableRow == 'RPS' ? <RPSData /> : null;
    return (
      <div className="TeamDataStyle">
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
        <div className="rowTeamData">
          <h2>Kolkata Knight Riders</h2>
          <div className="rowTeamData"  >
            <div  className="DataAlignmet1">
            <h4>Owner: Shahrukh Khan</h4>
            <h4>Home City: Kolkatta</h4>
          </div>
          <img src="kkr.png" className="DataAlignmet" height="60" width="80" />
        </div>
        </div>
        <table >
          <tr className="header">
            <th >Name</th>
            <th >Matches Played</th>
            <th >Total Runs</th>
            <th >Age</th>
            <th >Speciality</th>
            <th>Best Score</th>
          </tr>
          <tr className="captain">
            <th > Gautam Gambhir (Captain)</th>
            <th >45</th>
            <th >2050</th>
            <th >34</th>
            <th >Batsman</th>
            <th >198*</th>
          </tr>
          <tr>
            <td> Manish Pandey</td>
            <th >30</th>
            <td>1045</td>
            <td>32</td>
            <td>Batsman</td>
            <td>100*</td>
          </tr>
          <tr>
            <td> Robin Uttapa</td>
            <th >25</th>
            <td>1350</td>
            <td>34</td>
            <td>Batsman</td>
            <td>102*</td>
          </tr>
          <tr>
            <td> Yosuf Pathan</td>
            <th >38</th>
            <td>1350</td>
            <td>30</td>
            <td>Batsman</td>
            <td>116</td>
          </tr>
          <tr>
            <td> Sunil Nariane</td>
            <th >33</th>
            <td>789</td>
            <td>28</td>
            <td>Batsman/ Bowler</td>
            <td>87</td>
          </tr>
          <tr>
            <td> Chris Lynn</td>
            <th >11</th>
            <td>289</td>
            <td>27</td>
            <td>Batsman</td>
            <td>45</td>
          </tr>
          <tr>
            <td> Surya Kumar Yadav</td>
            <th >23</th>
            <td>678</td>
            <td>25</td>
            <td>Batsman</td>
            <td>47</td>
          </tr>
          <tr>
            <td> Sakib-ul Hasan</td>
            <th >34</th>
            <td>1005</td>
            <td>36</td>
            <td>Batsman/ Bowler</td>
            <td>78*</td>
          </tr>
          <tr>
            <td> Umesh Yadav</td>
            <th >26</th>
            <td>201</td>
            <td>29</td>
            <td>Bowler</td>
            <td>29</td>
          </tr>
          <tr>
            <td> Kuldeep Yadav</td>
            <th >13</th>
            <td>143</td>
            <td>24</td>
            <td>Bowler</td>
            <td>33*</td>
          </tr>
          <tr>
            <td> Coulte-Nile</td>
            <th >11</th>
            <td>89</td>
            <td>24</td>
            <td>Bowler</td>
            <td>34</td>
          </tr>
        </table>
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