import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
        username:'',
        comments:'',
        topic:'react'

    }
  }
  handlerUsernameChange=(event)=>
    this.setState({
        username:event.target.value
    })
    handlerCommentsChange=(event)=>
        this.setState({
            comments:event.target.value
        })
        handlerTopicChange=(event)=>
            this.setState({
                topics:event.target.value
            })
    handlerSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);
        event.preventDefault();
    }
  render(){
    return(
       
        <div>
            <form onSubmit={this.handlerSubmit}>
        
        <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handlerUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handlerCommentsChange}/>
            
        </div>
        <div>
            <label>Topics</label>
            <select value={this.state.topics} onChange={this.handlerTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="java">Java</option>
            </select>
                    <button>Submit</button>
        </div>
        </form>
        </div>
    );
  }
}

export default Form;
