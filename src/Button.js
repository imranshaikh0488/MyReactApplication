import React, { Component } from 'react';
import ListBox from './ListBox.js'
import { Button } from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap';
class MyButton extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         showTableRow: false
        }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({showTableRow: true})
        
   }

   render() {

    const table = this.state.showTableRow? <ListBox/>:null;
      return (
         <div>
            <Button bsStyle="success" onClick = {this.updateState}>Team Details</Button>
            {table}
         </div>
      );
   }
}

export default MyButton;