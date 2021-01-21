import React, {Component,useState}from "react";
import { NavLink } from 'react-router-dom';
import CartComp from './CartComp';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
     submitForm(){
        
        this.props.history.push('/Topic')
    } 

    render() {
       /*  const[isTrue, setIsTrue] =useState(true);
        if(!isTrue)
        {
          return <Redirect to ="/Signin"/>
        }  */
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleChange}
                /><br></br>
                <label htmlFor="email">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={this.handleChange}
                /><br></br>
              

              <button type="submit" onClick={()=>setIsTrue(false)}>Submit</button>
            </form>
        );
    }

    
}
export default Login;