import {ADD_PASSCAT,FETCH_PASSCAT} from './passType';
const axios = require('axios');

export const addPassCat=(category)=>{
    
   var OPTIONS={
    url: 'http://localhost:5000/api/add-category',
    method: 'POST',
    data: { pass_cat: category},
    headers: 
{
 'content-type': 'application/json',
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1ODkyOTYwNTksImV4cCI6MTU4OTI5OTY1OX0.PNI3j4B3WYnXW_P32X-7RazzoyuWSzICH6KbarXv6v4' },

  }
     axios(OPTIONS).then(res=>console.log(res.data));
     return {
        type:ADD_PASSCAT,
        payload:category
    }
}

export const fetchPassCat=()=>{
  
   return dispatch=>{
    var OPTIONS={
        url: 'http://localhost:5000/api/getCategory',
        method: 'GET',
        headers: 
    {
     'content-type': 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1ODkyOTYwNTksImV4cCI6MTU4OTI5OTY1OX0.PNI3j4B3WYnXW_P32X-7RazzoyuWSzICH6KbarXv6v4' },
    
      }
      axios(OPTIONS).then(res=>{
         const categories=res.data.results.map(category=>category);
       //  console.log(categories);
       dispatch(getSuccessAllCategory(categories));
     }
      ).catch(err=>console.log(err));
      
 }
}

const getSuccessAllCategory=(categories)=>{
   return { type:FETCH_PASSCAT,
        payload:categories
        }
}