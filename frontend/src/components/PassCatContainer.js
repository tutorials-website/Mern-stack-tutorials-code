import React,{ useState } from 'react'
import {connect} from 'react-redux';
import { addPassCat,updatePassCat} from '../redux';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import GetPassCatContainer from './GetPassCatContainer';
function PassCatContainer(props) {
    const [category, setCategory] = useState('');

    if(props.action==='Add'){
var actionButton=<Button variant="primary" onClick={()=>props.addPassCat(category)}>ADD</Button>;
    }else{
 actionButton=<Button variant="primary" onClick={()=>props.updateCat(props.id,category)}>UPDATE</Button>;  
    }

    return (
        <Container>
        <Row>
        <Col>
            <h1>{props.action} Password Category</h1>
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
    msg:state.pass.msg
 }
}

const mapDispatchtoProps=(dispatch)=>{
 return{
    addPassCat:function(category){
        dispatch(addPassCat(category));
    },
    updateCat:function(id,category){
        dispatch(updatePassCat(id,category));
    }  
 }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);
