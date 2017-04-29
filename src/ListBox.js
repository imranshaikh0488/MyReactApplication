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
            <th className="fontcolorwhite">Name</th>
            <th className="fontcolorwhite">Matches Played</th>
            <th className="fontcolorwhite">Total Runs</th>
            <th className="fontcolorwhite">Age</th>
            <th className="fontcolorwhite">Speciality</th>
            <th className="fontcolorwhite">Best Score</th>
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
        <div className="rowTeamData">
          <h2>Royal Challengers</h2>
          <div className="rowTeamData"  >
            <div  className="DataAlignmet1">
            <h4>Owner: Vijay Mallaya</h4>
            <h4>Home City: Banglore</h4>
          </div>
          <img src="rcb.png" className="DataAlignmet" height="60" width="80" />
        </div>
        </div>
        <table >
          <tr className="header">
            <th className="fontcolorwhite">Name</th>
            <th className="fontcolorwhite">Matches Played</th>
            <th className="fontcolorwhite">Total Runs</th>
            <th className="fontcolorwhite">Age</th>
            <th className="fontcolorwhite">Speciality</th>
            <th className="fontcolorwhite">Best Score</th>
          </tr>
          <tr className="captain">
            <th > Virat Kholi (Captain)</th>
            <th >38</th>
            <th >2150</th>
            <th >29</th>
            <th >Batsman</th>
            <th >132*</th>
          </tr>
          <tr>
            <td> Chris gayle</td>
            <th >31</th>
            <td>1048</td>
            <td>32</td>
            <td>Batsman</td>
            <td>112*</td>
          </tr>
          <tr>
            <td> A.B Devellers</td>
            <th >25</th>
            <td>1450</td>
            <td>36</td>
            <td>Batsman</td>
            <td>103*</td>
          </tr>
          <tr>
            <td> Kedar Jhadav</td>
            <th >22</th>
            <td>550</td>
            <td>13</td>
            <td>Batsman</td>
            <td>67</td>
          </tr>
          <tr>
            <td> Baby</td>
            <th >9</th>
            <td>280</td>
            <td>28</td>
            <td>Batsman/ Bowler</td>
            <td>54*</td>
          </tr>
          <tr>
            <td> Sarfaraz Khan</td>
            <th >11</th>
            <td>233</td>
            <td>27</td>
            <td>Batsman</td>
            <td>43</td>
          </tr>
          <tr>
            <td> Shane Watson</td>
            <th >33</th>
            <td>978</td>
            <td>25</td>
            <td>Batsman/ Bowler</td>
            <td>87*</td>
          </tr>
          <tr>
            <td> Chahal</td>
            <th >27</th>
            <td>134</td>
            <td>27</td>
            <td>Bowler</td>
            <td>34</td>
          </tr>
          <tr>
            <td>Stuart Binny</td>
            <th >26</th>
            <td>201</td>
            <td>29</td>
            <td>Bowler</td>
            <td>29</td>
          </tr>
          <tr>
            <td> K Yadav</td>
            <th >13</th>
            <td>148</td>
            <td>24</td>
            <td>Bowler</td>
            <td>33*</td>
          </tr>
          <tr>
            <td>Varun Aron</td>
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
class RPSData extends Component {
  render() {
    // const TeamData = this.state.showTableRow=='RCB'  ? <p>imran</p> : null;
    return (
     <div>
        <div className="rowTeamData">
          <h2>Rising Pune Superstars</h2>
          <div className="rowTeamData"  >
            <div  className="DataAlignmet1">
            <h4>Owner: Sahara</h4>
            <h4>Home City: Pune</h4>
          </div>
          <img src="rps.png" className="DataAlignmet" height="60" width="80" />
        </div>
        </div>
        <table >
          <tr className="header">
            <th className="fontcolorwhite">Name</th>
            <th className="fontcolorwhite">Matches Played</th>
            <th className="fontcolorwhite">Total Runs</th>
            <th className="fontcolorwhite">Age</th>
            <th className="fontcolorwhite">Speciality</th>
            <th className="fontcolorwhite">Best Score</th>
          </tr>
          <tr className="captain">
            <th > M. S Dhoni (Captain)</th>
            <th >45</th>
            <th >2050</th>
            <th >34</th>
            <th >Batsman</th>
            <th >198*</th>
          </tr>
          <tr>
            <td> Naman Ojha</td>
            <th >30</th>
            <td>1045</td>
            <td>32</td>
            <td>Batsman</td>
            <td>100*</td>
          </tr>
          <tr>
            <td>Steve Smith</td>
            <th >25</th>
            <td>1350</td>
            <td>34</td>
            <td>Batsman</td>
            <td>102*</td>
          </tr>
          <tr>
            <td>R Pant</td>
            <th >38</th>
            <td>1350</td>
            <td>30</td>
            <td>Batsman</td>
            <td>116</td>
          </tr>
          <tr>
            <td> A Thakur</td>
            <th >33</th>
            <td>789</td>
            <td>28</td>
            <td>Batsman/ Bowler</td>
            <td>87</td>
          </tr>
          <tr>
            <td> Manoj Tiwari</td>
            <th >11</th>
            <td>289</td>
            <td>27</td>
            <td>Batsman</td>
            <td>45</td>
          </tr>
          <tr>
            <td> CHristian</td>
            <th >23</th>
            <td>678</td>
            <td>25</td>
            <td>Batsman</td>
            <td>47</td>
          </tr>
          <tr>
            <td>Imran Tahir</td>
            <th >34</th>
            <td>1005</td>
            <td>36</td>
            <td>Batsman/ Bowler</td>
            <td>78*</td>
          </tr>
          <tr>
            <td> Rabada</td>
            <th >26</th>
            <td>201</td>
            <td>29</td>
            <td>Bowler</td>
            <td>29</td>
          </tr>
          <tr>
            <td> A. Behra</td>
            <th >13</th>
            <td>143</td>
            <td>24</td>
            <td>Bowler</td>
            <td>33*</td>
          </tr>
          <tr>
            <td>James Faulkner</td>
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
export default ListBox;