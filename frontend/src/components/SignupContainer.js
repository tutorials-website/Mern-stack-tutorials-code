import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { signupUser} from '../redux';

function SignupContainer(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Container>
        <Row>
       
        <Col>
            <h1>Signup</h1>
            <Form className="form">     
    <p>{props.msg}</p>
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" defaultValue={props.username} onChange={e=>setUsername(e.target.value)} />
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" defaultValue={props.email} onChange={e=>setEmail(e.target.value)} />
  
  </Form.Group>
  <Form.Group controlId="formCategory3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)} />
  
  </Form.Group>
  <Form.Group controlId="formCategory4">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" defaultValue={props.confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
    </Form.Group>
    <p>Already have an account?<a href="/">Login Here</a></p>
  <Button variant="primary" onClick={()=>props.signupUser(username,email,password,confirmPassword)}>SIGNUP</Button>
  </Form>
   </Col>
   <Col></Col>
       </Row>
        </Container>
    )
}

const mapStatetoProps=(state)=>{
    return{
        username:state.user.username,
       email:state.user.email,
       password:state.user.password,
       confirmPassword:state.user.confirmPassword,
       msg:state.user.msg
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
        signupUser:function(username,email,password,confirmPassword){
           dispatch(signupUser(username,email,password,confirmPassword));
       },
       
    }
   }
   

   export default connect(mapStatetoProps,mapDispatchtoProps)(SignupContainer);
