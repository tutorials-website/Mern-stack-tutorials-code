import React,{ useState } from 'react'
import {connect} from 'react-redux';
import { addPassCat} from '../redux';

function PassCatContainer(props) {
    const [category, setCategory] = useState('')
   
    return (
        <div>
            <h1>Add Password Category</h1>
            <h1>Category - {props.category}</h1>
         <input type="text" value={category} onChange={e=>setCategory(e.target.value)}/>
    <button onClick={()=>props.addPassCat(category)}>ADD</button>
        </div>
    )
}

const mapStatetoProps=(state)=>{
 return{
    category:state.category,
   
 }
}

const mapDispatchtoProps=(dispatch)=>{
 return{
    addPassCat:function(category){
        dispatch(addPassCat(category));
    }
    
      
 }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);
