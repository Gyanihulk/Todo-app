import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./bootstrap.css";
import AuthenticationService from "./AuthenticationService.js";


class Logincomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "adamya",
      password: "",
      hasLoginFailed: false,
      showSuccessMEssage: false,
    };
    /*  this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
        this.handlerPasswordChange = this.handlerPasswordChange.bind(this); */
    this.handlechange = this.handlechange.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  handlechange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  loginClick() {
    if (this.state.username === "adamya" && this.state.password === "dummy") {
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password
      );
       this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false }); 
      this.props.navigate(`/welcome/${this.state.username}`);
      console.log("successful");
      
    } else {
      console.log("Failed");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  /*   handlerUsernameChange(event){
        console.log(event.target.value);
        this.setState({username:event.target.value})
            
    }
    handlerPasswordChange(event){
        console.log(event.target.value);
        this.setState({password:event.target.value})
            
    } */
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div class="container">
          User Name:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handlechange}
          />
          Password :
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlechange}
          />
          <button className="btn" onClick={this.loginClick}>
            Login
          </button>
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
          {this.state.hasLoginFailed && (
            <div className="alert-warning"> Invalid Credentials </div>
          )}
          {this.state.showSuccessMessage && <div> Login Successful </div>}
        </div>
      </div>
    );
  }
}

export default Logincomponent;
