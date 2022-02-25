import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import './bootstrap.css'
import AuthenticationService from "./AuthenticationService.js";

class FooterComponent extends Component{
    render(){
        return(
            <>
            <footer className="footer">
                <span className="test-white">All Rights Reserved 2022 @adamya </span>
            </footer>
            </>


    )
    }
}

export default FooterComponent