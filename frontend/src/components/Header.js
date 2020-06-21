import React from 'react';
import {connect} from 'react-redux';
import { Link,Route } from "react-router-dom";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {logout} from "../redux/action/userAction";
import UserProfile from "./UserProfile";


function Header(props) {
    
  
    return (
        <div>
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/" className="nav-link">Password Category</Link>
    
      <NavDropdown title="Passowrd" id="basic-nav-dropdown">
      <Link to="#" className="dropdown-item" role="button">Add New Password</Link>
      <Link to="#" className="dropdown-item" role="button">View All Passwrd</Link>
      </NavDropdown>

      <NavDropdown title={props.userDetails.username} id="basic-nav-dropdown">
      <Link to="/userprofile" className="dropdown-item" role="button">View Profile</Link>
      <Link to="#" onClick={()=>props.logoutUser()} className="dropdown-item" role="button">Logout</Link>
      </NavDropdown>
        
    </Nav> 
    
  </Navbar.Collapse>
</Navbar>
      <Route path="/userprofile" component={UserProfile}/>
        </div>
    )
}

const mapStatetoProps=(state)=>{
  return{
     userDetails:state.user.userDetails,
  }
 }

 const mapDispatchtoProps=(dispatch)=>{
  return{
     
     logoutUser:function(){
      dispatch(logout());
  },
     
  }
 }
export default connect(mapStatetoProps,mapDispatchtoProps)(Header);