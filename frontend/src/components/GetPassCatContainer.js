import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPassCat,editPassCat} from '../redux';
import { Table,Button } from 'react-bootstrap';

function GetPassCatContainer(props) {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPassCat())
    });
    const allCategories=useSelector(state=>state.allCategories);

   const editCategory=(id,category)=>{
    dispatch(editPassCat(id,category));
   } 
    //console.log(allCategories);
    return (
        <div>
            <h1>All Passsword Category</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allCategories.map((val,i)=>(
                        <tr key={i}>
                     <td key={val._id}>{i+1}</td>       
                    <td>{val._id}</td>
                    <td>{val.password_category}</td>
                    <td><Button className="btn btn-primary" onClick={()=>editCategory(val._id,val.password_category)}>Edit</Button> <Button className="btn btn-danger">Delete</Button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table>
 
        </div>
    )
}
export default GetPassCatContainer;