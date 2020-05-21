import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function Header() {
    
  
    return (
        <div>
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Category" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Add New Password Category</NavDropdown.Item>
        <NavDropdown.Item href="#">View All Passwrd Category</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Passowrd" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Add New Password</NavDropdown.Item>
        <NavDropdown.Item href="#">View All Passwrd</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default Header;