import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import './bootstrap.css'
import AuthenticationService from "./AuthenticationService.js";



class HeaderComponent extends Component{
    
    render(){
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);



        return(
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">adamya </a></div>
                    <ul class="navbar-nav" >
                        {isUserLoggedIn &&<li className="nav-link"><Link to="/welcome">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/todos">Todos</Link></li>}
                    </ul>
                    <ul class="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li className="nav-link"><Link to="/login" >Login</Link></li>}
                        {isUserLoggedIn &&<li className="nav-link"><Link to="/logout"onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>


                </nav>
            </header>
        )
    }
}

export default HeaderComponent 