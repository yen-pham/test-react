import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import * as firebase from 'firebase';
  import {firebaseConnect} from './firebaseConnect';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state ={
            email : "",
            password:"",
            data :[]
        }
    }

    componentDidMount(){
        var connectData =firebase.database().ref('login'); 
        var arrayData =[];
        firebaseConnect.on('value',(users)=>{
            users.map((value,key) => {
                const email =value.email;
                const password =value.password;
                arrayData.push({          
                  email:email,
                  password:password
                })
         console.log(snapshot.val());  
       });
      })
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {[name] : value}
        );
    }
    loadData  = (email,password) => {
       
        //      firebaseConnect.on('value',(user)=>{
        //          user.forEach(element => {
        //     if(element.val().email=== email && element.val().password === password){
        //                 // localStorage.setItem(key,value);
        //                 console.log(element.val().email,element.val().password);
        //     }
        //     else console.log('haizzz');
                        
        //     });
        // });
       
      }
    render() {
        console.log(this.state.data);
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
                    <a href="#">Register</a>
                    <div className="clear" />
                </div>
                <div className="social-icons"> 
                    <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li> 
                    </ul>  
                </div>
              <Link to="/eh" ><input  type="submit" defaultValue onClick={(email,password) =>this.loadData(this.state.email,this.state.password)}/> 
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