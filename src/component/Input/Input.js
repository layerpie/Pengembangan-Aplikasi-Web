import React from "react";
import { Component } from "react/cjs/react.production.min";
import'./input.css'

export default class Input extends Component {
    constructor(){
        super();
        this.state = {status : ' '}
    }
    render(){
        return(
            <div className="input">
                <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.setState({status : ev.target.value})} />
                <p>Your Status : {this.state.status}</p>
            </div>
        )
    }
}