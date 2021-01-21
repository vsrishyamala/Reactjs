import React, { Component, useState } from 'react';
import CartComp from './CartComp.js';

import { NavLink, Redirect } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {fetchComments,SaveComments,PutComments,DelComments} from './service.js';
class ControllerInputs extends Component{ 
  /* const[isTrue, setIsTrue] =useState(true);
  if(!isTrue)
  {
    return <Redirect to ="/CartComp"/>
  } */
  constructor(props)
  {
    super(props)
    this.state={
      id:0,
      username: " ",
      password: ''
    }
  }
  componentDidMount()
  {
    const fet=fetchComments();

  }
  onClick=(event)=>
  {
    this.setState({[event.target.name]:event.target.value})

  }
  onSubmit=()=>{
    const result={
      username: this.state.username,
      password: this.state.password

    }
    console.log("Result"+result)
    const saveres= SaveComments(result)
   

  }  
  onSubmit2=()=>{
    const result={
      username: this.state.username,
      password: this.state.password

    }
    console.log("Result"+result)
    const saveres= PutComments(result)
   

  }  
  onSubmit3=()=>{
    
    const saveres= DelComments()
   

  }  
  render()
  {
    return (
      <div>
        <Router>
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label" >username</label>
            <div class="col-sm-4">
              <input type="username" class="form-control" name="username" value={this.state.username} onChange={(event)=>{this.onClick(event)}} />
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label" >Password</label>
            <div class="col-sm-4">
              <input type="password" class="form-control" name="password" value={this.state.password} onChange={(event)=>{this.onClick(event)}} />
            </div>
          </div>
          <button type="submit" onClick={()=>{this.onSubmit()}}>submit</button>
          <button type="submit" onClick={()=>{this.onSubmit2()}}>Edit</button>
          <button type="submit" onClick={()=>{this.onSubmit3()}}>Delete</button>


         {/*  <button type="submit" onClick={()=>setIsTrue(false)}>Submit</button> */}
        </form>
       
        </Router>
        
      </div>
  
  )
    }
}
export default ControllerInputs;