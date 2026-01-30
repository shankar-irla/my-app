import React, { Component,PureComponent } from 'react';
import PureComp from './PureComp';
import Regcomp from './Regcomp';
import Memocomp from './MemoComp';

export class Parentcomp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
            name:'Varshika'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Varshika'
            })
        },2000)
    }

    
  render() {
    console.log('********Parent Component Render**********')
    return (
      <div>
        Parent Component
        <Memocomp name={this.state.name}/>
        {/*<Regcomp name={this.state.name}/>
        <PureComp name={this.state.name}/>*/}
      </div>
    );
  }
}

export default Parentcomp;
