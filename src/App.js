import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Success from './Success';
import {users} from './firebaseConnect';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

  return (
    <Router>
    <div className="App">
     <Route path="/" exact render={ ( ) => {
       console.log('jhhhhh');
       if(localStorage.getItem('user')===null) return <Login></Login>;
       else return <Success/>; } } />
     <Route path="/register/" render={ ( ) => {
       if(localStorage.getItem('user')===null) return <Register/>;
       else return <Success/>;  } } />   
    </div>
    </Router>
  );
}
}

 
export default App;