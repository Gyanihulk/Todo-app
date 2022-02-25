import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import './bootstrap.css'
import HelloWorldService from "../../Api/todo/HelloWorldService.js";



class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        //this.handleError=this.error.handleError(this)
        this.state={
            welcomeMessage :''
            
        }
    }
render(){
    return(
        <>
        <h1> Welcome</h1>
        <div class="container">
        Welcome {this.props.params.name}. you can manage your tdo <Link to="/todos">herre</Link> 
        </div>
        <div className ="container ">
            Click Here to get a customized Welcome message.
            <button onClick ={this.retrieveWelcomeMessage} className ="btn btn-primary">Get Welcome message</button>
        </div>
        <div className ="container ">
            {this.state.welcomeMessage}


        </div>
        
        </>
        
    )
}
retrieveWelcomeMessage(){
    /* console.log('retrieve Clicked')
    HelloWorldSerive.executeHelloWorldService()
    .then(response => this.handleSuccessfulResponse(response))
    //.catch() */


    
   /*  HelloWorldService.executeHelloWorldBeanService()
    .then(response => this.handleSuccessfulResponse(response)) */

    HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
    .then(response => this.handleSuccessfulResponse(response))
//.catch(error => this.handleError(error))

}

handleSuccessfulResponse(response){
    console.log(response)
this.setState({welcomeMessage: response.data.message})

}

handleError(error){
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})

}

}

export default WelcomeComponent