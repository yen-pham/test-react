import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import {firebaseConnect} from './firebaseConnect';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Register from './Register';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      login:false
    }
  }
  pushData  = (email,password) => {
    var connectData =firebase.database().ref('login');
    connectData.push({
      title : email,
      content : password
    });
    console.log("");
    alert('ban vua them du lieu vao firebase');
  }
  render() {
    var connectData =firebase.database().ref('login'); 
       
     connectData.once('value').then(function(snapshot){
        var data = snapshot.val();
      console.log(snapshot.val());

    });
  return (
    <Router>
    <div className="App">
     {/* <Login email={this.state.email} password ={this.state.password} login={this.state.login}/> */}
     <Route path="/" exact component={Login} />
     <Route path="/register/" component={Register} />
    </div>
    </Router>
  );
}
}

 
export default App;