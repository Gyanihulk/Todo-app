import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import './bootstrap.css'
import AuthenticationService from "./AuthenticationService.js";

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1> You are logged out</h1>
                <div className="container">
                    Thankyou for using our Application.
                </div>
            </>
        )
    }
}

export default LogoutComponent