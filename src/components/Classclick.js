import React, { Component } from 'react';
class Classclick extends Component{
    Handler(){
        console.log('Clicked the button');
    }
    render(){
        return(
            <div>
<button onClick={this.Handler}>Click Me</button>
            </div>
        );
    }
}
export default Classclick;