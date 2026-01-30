import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
      this.state = {
            isLoggedIn:true
      }
      this.state={
        isTrue:true
      }
    }
    
  render() {
   return this.state.isTrue && <div>Welcome Varshika!!</div>
}
}

export default UserGreeting;
