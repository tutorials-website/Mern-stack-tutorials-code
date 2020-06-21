import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './components/MainContainer';
import setAuthenticationToken from "./redux/action/setAuthenticationToken";
import {setCurrentUser,logout} from "./redux"
import jwt from "jsonwebtoken";
import store from './redux/store';
import './App.css';

function App() {

  if(localStorage.jwtToken){
    setAuthenticationToken(localStorage.jwtToken);
   
   jwt.verify(localStorage.jwtToken,'secret',function(err,decode){
    if(err){
        store.dispatch(logout());
    }else{
     //console.log(decode);
      store.dispatch(setCurrentUser(decode));
    }
   });
  }

 
  return (
    <Provider store={store}>
    <div className="App">
    <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
