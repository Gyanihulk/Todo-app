import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import withNavigation from './WithNavigation.jsx' 
import withParams from './withParams.jsx'
import './bootstrap.css'

import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import HeaderComponent from "./Header.jsx"
import LogoutComponent from "./logoutcomponent.jsx"
import WelcomeComponent from "./WelcomeComponent.jsx"
import ListTodosComponent from "./ListTodosComponent.jsx"
import FooterComponent from "./FooterComponent.jsx";
import Logincomponent from "./Logincomponent.jsx";

class TodoApp extends Component {
    render (){
        const LoginComponentWithNavigation = withNavigation(Logincomponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return(
            <div className="TodoApp">
                
                <Router>
                    {/* not using switch because of react v6+ update */}
                    <HeaderComponentWithNavigation/>

                <Routes>
                <Route path="/" element={<LoginComponentWithNavigation />} />
                <Route path="/login" element={<LoginComponentWithNavigation/>} />
                <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} /> 
                <Route path="*" element={<ErrorComponent />} />
                <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent /></AuthenticatedRoute>} />
                <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                </Routes>
                <FooterComponent/>


                </Router>
                
                
            </div>

        )
    }
}








function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}



/* function ShowInvalidCredentials(props){
if(props.hasLoginFailed){
    return <div> Invalid Credentials</div>
}
return null;
}
function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div> Login Successful</div>
    }
    return null;
    } */
export default TodoApp