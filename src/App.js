import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PureComp from './PureComp';
import ControllerInputs from './ControllerInputs.js';
import CartComp from './CartComp.js';
import Signin from './Signin';
import Topic from './Topic';
import PostList from './posts/PostList';
import Contact from './Contact';
import Books from './Books';

import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import ValidatedLogin from './ValidatedLogin';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 16,
      eligible: false
    }

  }
  componentDidMount() {
    setTimeout(() => { this.setState({ days: 100 }) }, 5000)
  }
  onIncCLick = () => {
    this.setState({ days: this.state.days + 1 })
  }
  render() {

    return (
      <div class="App">

        <h1>Sri Manakula Vinayagar College</h1>
        {/* {this.state.days===100 && <ClassComp days={this.state.days}/>}

   <PureComp days={this.state.days} and eligible={this.state.eligible}/>
    <MemoComp days={this.state.days}/> */}
        <BrowserRouter>
          <div class="navv">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <div class="btn-group" role="group" aria-label="Basic example">

      <li class="nav-item active">
     <button type="button" class="btn btn-outline-success"><NavLink activeClassName="active" to="/Home">Home  </NavLink></button> 
      </li>
      <li class="nav-item">
      <button type="button" class="btn btn-outline-success"><NavLink activeClassName="active" to="/Signin">  Sign in</NavLink></button>

      </li>
      
      <li class="nav-item">
      <button type="button" class="btn btn-outline-success"><NavLink activeClassName="active" to="/ValidatedLogin"> Login</NavLink></button>

      </li>
      <li class="nav-item">
      <button type="button" class="btn btn-outline-success"><NavLink activeClassName="active" to="/Topic">  About</NavLink></button>
      </li>
      <li class="nav-item">
      <button type="button" class="btn btn-outline-success"><NavLink activeClassName="active" to="/Contact">  Contact Us</NavLink></button>
      </li>
      </div>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            

          </div>

          <div>

            <Switch>
            <Route path="/Home" component={Home} />

              <Route path="/ValidatedLogin" component={ValidatedLogin} />

              <Route path="/CartComp" component={CartComp} />
              <Route path="/Signin" component={Signin} />
              <Route path="/Topic" component={Topic} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Books" component={Books} />




            </Switch>
          
          </div>
        </BrowserRouter>

        
      </div>
    )
  }


}
export default App;