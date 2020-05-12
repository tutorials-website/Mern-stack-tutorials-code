import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPassCat} from '../redux';

function GetPassCatContainer() {
    
    const dispatch=useDispatch();
   
   useEffect(()=>{
    dispatch(fetchPassCat())
   });
   const allCategory=useSelector(state=>state.allCategory);
 // console.log(allCategory)
    return (
        <div>
            <h1>All Category</h1>
           <table border="1">
               <thead>
               <tr>
                   <th>Category ID</th>
                   <th>Category Name</th>
               </tr>
               </thead>
               <tbody>
               {
                allCategory.map((numList,i) =>(
                   <tr key={i}>
                         <td key={numList._id}>{numList._id}</td>
                         <td key={i}>{numList.password_category}</td>
                   </tr>
                ))
           }
               </tbody>
               
               </table>
        </div>
    )
}
export default GetPassCatContainer;