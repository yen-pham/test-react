import React, { Component } from 'react';
import * as firebase from 'firebase';
import {firebaseConnect} from './firebaseConnect';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email : "",
            password:"",
        }
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {[name] : value}
        );
    }
    pushData  = (email,password) => {
        var connectData =firebase.database().ref('login');
        connectData.push({
          email : email,
          password : password
        });
        alert('đăng kí thành công !!!');
      }
    render() {
        return (
            <div data-vide-bg="video/keyboard">
            <div className="main-container">
                {/*header*/}
                <div className="header-w3l">
                <h1>Modern Login Form</h1>
                </div>
                {/*//header*/}
                {/*main*/}
                <div className="main-content-agile">
                <div className="w3ls-pro">
                    <h2>Register Now</h2>
                </div>
                <div className="sub-main-w3ls">	
                    <form action="#" method="post">
                    <input placeholder="Enter your Name" name="name" type="name" required onChange ={ (event) => this.isChange(event)} />
                    <span className="icon1"><i className="fa fa-user" aria-hidden="true" /></span>

                    <input placeholder="Enter your E-mail" name="email" type="emaila" required  onChange ={ (event) => this.isChange(event)} />
                    <span className="icon2"><i className="fa fa-envelope" aria-hidden="true" /></span>

                    <input placeholder="Enter Password" name="password" type="password" required  onChange ={ (event) => this.isChange(event)} />
                    <span className="icon3"><i className="fa fa-unlock-alt" aria-hidden="true" /></span>

                    <div className="checkbox-w3">
                        <span className="check-w3"><input type="checkbox" />Remember Me</span>
                        <div className="clear" />
                    </div>
                    <div className="social-icons"> 
                        <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li> 
                        </ul>  
                    </div>
                  <Link to ="/">  <input type="submit" href='/' defaultValue onClick={(email,password) =>this.pushData(this.state.email,this.state.password)}/>
                   </Link> </form>
                </div>
                </div>
                {/*//main*/}
            </div>
            </div>
        );
    }
}

export default Register;