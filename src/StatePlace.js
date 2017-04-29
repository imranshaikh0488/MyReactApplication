import React from 'react';

class StatePlace extends React.Component {

	
   render() {
      return (
        <div>
            
            <h1>{this.props.header}</h1>
            <h2>{this.props.content}</h2>
         </div>
      );
   }

}

   StatePlace.defaultProps = {
   header: "Header from props...",
   content:"Content from props..."
}
export default StatePlace;