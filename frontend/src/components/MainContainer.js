import React from 'react'
import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import PassCatContainer from './PassCatContainer';
import LoginContainer from "./LoginContainer";
import SignupContainer from './SignupContainer';

function MainContainer(props) {
    const isUserLoggedin=useSelector(state=>state.user.isLoggedIn);
    if(isUserLoggedin===false){
      var callContainer=<><Route exact path="/" component={LoginContainer} /> <Route path="/signup" component={SignupContainer} /></>
    }else{
        callContainer=<><Header/><Route exact path="/" component={PassCatContainer} /></>
    }

    return (
        <Router>
        {callContainer}
        </Router>
    )
}



export default MainContainer;
