import React, { Component } from 'react';


class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Varshika'
      }
      console.log("LifeCycleA constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    } 
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");
        return null
    }
    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
  render() {
    console.log("LifecycleA render");
    return (
      <div>
      <div>
        LifeCycleA
      </div>
      <button onClick={this.changeState}>Change State</button>
     
      </div>
    );
  }
}

export default LifecycleA;
