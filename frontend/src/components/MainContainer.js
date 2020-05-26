import React from 'react'
import {useSelector} from 'react-redux';
import Header from './Header';
import PassCatContainer from './PassCatContainer';
import SignupContainer from './SignupContainer';

function MainContainer(props) {
   const isUserLoggedin=useSelector(state=>state.user.isLoggedIn);
   
    if(isUserLoggedin===false){
      var callContainer=<><SignupContainer/> </>
    }else{
        callContainer=<><Header/><PassCatContainer/></>
    }

    return (
        <>
        {callContainer}
        </>
    )
}


export default MainContainer;
