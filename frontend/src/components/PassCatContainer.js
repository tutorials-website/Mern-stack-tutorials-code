import React,{ useState } from 'react'
import {connect} from 'react-redux';
import { addPassCat,updatePassCat} from '../redux';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import GetPassCatContainer from './GetPassCatContainer';
function PassCatContainer(props) {
    const [category, setCategory] = useState('');

    
    if(props.action==='Add'){
var actionButton=<Button variant="primary" onClick={()=>props.addPassCat(category,props.user_id)}>ADD</Button>;
    }else{
 actionButton=<Button variant="primary" onClick={()=>props.updateCat(props.id,category,props.user_id)}>UPDATE</Button>;  
    }

    return (
        <Container>
        <Row>
        <Col>
    <h1>{props.action} Password Category </h1>
            <Form className="form">     
            <h2>Category - {props.category}</h2>   
    <p>{props.msg}</p>
  <Form.Group controlId="formCategory">
    <Form.Label>Enter Password Category</Form.Label>
    <Form.Control type="text" defaultValue={props.category} onChange={e=>setCategory(e.target.value)} />
  
  </Form.Group>

  {actionButton}
  </Form>
   </Col>
   <Col>
   <GetPassCatContainer/>
   </Col>
       </Row>
        </Container>
    )
}

const mapStatetoProps=(state)=>{
 return{
    category:state.pass.category,
    action:state.pass.action,
    id:state.pass.id,
    user_id:state.user.userDetails.userid,
    msg:state.pass.msg
 }
}

const mapDispatchtoProps=(dispatch)=>{
 return{
    addPassCat:function(category,user_id){
        dispatch(addPassCat(category,user_id));
    },
    updateCat:function(id,category,user_id){
        dispatch(updatePassCat(id,category,user_id));
    }  
 }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);
