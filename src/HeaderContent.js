import React from 'react';

class HeaderContent extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Indian Premiere League</h1>
         </div>
      );
   }
}

class Content extends React.Component {

   

   render() {

      return (
         <div>
            <p>Get updates about Indian Cricket, LIve scores, Schedules etc..</p>
         </div>
      );
   }
}

export default HeaderContent;