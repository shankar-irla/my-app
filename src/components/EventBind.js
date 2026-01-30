import React, { Component } from 'react';
class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)  // 3rd approach
    }   
    clickHandler = () => {   // 4th approach
         this.setState({
             message: 'Goodbye!!'
         })
         console.log(this);
    }   
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  // 1st approach */}
                {/* <button onClick={() => this.clickHandler()}>Click</button>  // 2nd approach */}
                <button onClick={this.clickHandler}>ClickMe</button>  {/* 4th approach */}
            </div>
        );
    }
}
export default EventBind;
