import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import * as firebase from 'firebase';
  import {users} from './firebaseConnect';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state ={
            data :[]
        }
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {[name] : value}
        );
    }

    componentWillMount() {
        users.on('value',(userList)=>{
            var arrayData =[];
            userList.forEach(element => {
            const email =element.val().email;
            const password =element.val().password;
            arrayData.push({
              email:email,
              password:password
            })
            this.setState(
              {
                data:arrayData
              }
            );
          });
        })
        
      }
    loadData  = (email,password) => {
      
                 this.state.data.map((value,key) => {
            if(value.email=== email && value.password === password){
                        localStorage.setItem('user',JSON.stringify(value));
                        console.log(value.email,value.password);
            }
            else alert('đăng nhập không thành công');                    
            });
       
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
                <h2>Login Now</h2>
            </div>
            <div className="sub-main-w3ls">	
                <form action="#" method="post">
                <input placeholder="Enter your E-mail" name="email" type="emaila" required onChange ={ (event) => this.isChange(event)} />
                <span className="icon1"><i className="fa fa-envelope" aria-hidden="true" /></span>
                <input placeholder="Enter Password" name="password" type="password" required  onChange ={ (event) => this.isChange(event)} />
                <span className="icon2"><i className="fa fa-unlock-alt" aria-hidden="true" /></span>
                <div className="checkbox-w3">
                    <span className="check-w3"><input type="checkbox" />Remember Me</span>
                    <Link to="/register">Register</Link>
                    <div className="clear" />
                </div>
                <div className="social-icons"> 
                    <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li> 
                    </ul>  
                </div>
              <Link to="/" ><input  type="submit" defaultValue onClick={(email,password) =>this.loadData(this.state.email,this.state.password)}/> 
               </Link> </form>
            </div>
            </div>
            {/*//main*/}
        </div>
        </div>

        );
    }
}

export default Login;