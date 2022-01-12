import React, {Component} from 'react';
import'./input.css'

export default class Input extends Component {
    constructor(props){
        super(props);
<<<<<<< HEAD
     
    }
    render(){
        return(
            <div className="input">
                <input type="text" name="name" placeholder="Enter Your Name" onChange={(ev)=> this.props.getValues(ev.target.name,ev.target.value)} />

                <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.props.getValues(ev.target.name,ev.target.value)} />
=======
        this.state = { status: ''}
     
    } 
    render(){
        return(
            <div className="input">
                <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.setState({status : ev.target.value})} />
                <p>Your status : {this.state.status}</p>
            
>>>>>>> 99807405286df7fe82626b3b2515b6cb926eacb2
            </div>
        )
    }
}