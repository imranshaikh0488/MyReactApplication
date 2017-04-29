import React from 'react';

class DataTable extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"KKR",
               "points":"4"
            },
				
            {
               "id":2,
               "name":"RPS",
               "points":"6"
            },
				
            {
               "id":3,
               "name":"RCB",
               "points":"8"
            }
         ]
      }

      this.updateState = this.updateState.bind(this);
   }
	   updateState() {
      this.setState({data1: 'Data updated...'})
        
   }
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                  <div>
                   <button onClick = {this.updateState}>Update Data</button>
                    <h4>{this.state.data1}</h4>
                    </div>
               </tbody>
            </table>
         </div>
      );
   }
}

    class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Points Table</h1>
                
            </div>
        );
    }
    }

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <th>{this.props.data.id}</th>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.points}</td>
         </tr>
      );
   }
}

export default DataTable;