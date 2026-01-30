import  React, { Component } from 'react';
class Practicee extends Component {
constructor(props) {
  super(props)

  this.state = {
    message: 'Click it'
  }
}
clickHandler = () => {
     this.setState({
         message: 'Nothing here you can go back!!'
        })
        console.log(this);
}

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>ClickMe</button>  
            </div>
        );
    }
}
export default Practicee;