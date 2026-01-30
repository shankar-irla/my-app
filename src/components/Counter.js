import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        },
        ()=>{
            console.log('Updated Count:', this.state.count);
        }
    );
    }
    reset(){
        this.setState({
            count:0
        });
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <div><button onClick={()=>this.increment()}>Increment</button></div>
        <div><button onClick={()=>this.decrement()}>Decrement</button></div>
        <div><button onClick={()=>this.reset()}>Reset</button></div>
        <div><button onClick={()=>this.incrementFive()}>IncrementFive</button></div>
      </div>
    );
  }
}

export default Counter;