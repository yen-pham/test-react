import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class Success extends Component {
    logout = () =>{
            localStorage.removeItem('user');
        }
    render() { 
        return (
            <div>
                <div className="anhdoremon"><img  src ="https://i.pinimg.com/564x/7b/ec/f8/7becf8ba28a9c14d0fecf1b7d5b5553a.jpg" style={{width: 400}} /></div>
                <div className="svg-wrapper">
                    <svg height={40} width={150} xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height={40} width={150} />
                    </svg><div id="text">
                        <Link className ="a" to ="/" onClick = {()=> this.logout()} href classname="logout"><span className="spot"></span>LOGOUT</Link>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Success;