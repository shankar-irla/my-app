import React, { Component,PureComponent } from 'react';

export class Regcomp extends PureComponent {
  render() {
    console.log("Regular Component")
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    );
  }
}

export default Regcomp;
