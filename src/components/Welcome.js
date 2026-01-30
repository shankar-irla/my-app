import React, { Component } from 'react';
export class Welcome extends Component{
    render(){
        return<h1> Class Component {this.props.name} the {this.props.Profession}</h1>
    }
}
export default Welcome;
