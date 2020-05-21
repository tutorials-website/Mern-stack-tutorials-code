import {ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT} from './passType';
const axios = require('axios');

export const addPassCat=(category)=>{
    var OPTIONS = {
        url: "http://localhost:5000/api/add-category",
        method: "POST",
        data:{pass_cat:category},
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1OTAwMjE2ODcsImV4cCI6MTU5MDA1MDQ4N30.Lw8JK42o13CXk5DwSnh_G3uUG8G4fS07MWyT83FuZVg",
          "content-type": "application/json",
        },
      }

    axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));
    return{
        type:ADD_PASSCAT,
        payload:category
    }
}

export const fetchPassCat=(allCategories)=>{

    return function(dispatch){

        var OPTIONS = {
            url: "http://localhost:5000/api/getCategory",
            method: "GET",
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1OTAwMjE2ODcsImV4cCI6MTU5MDA1MDQ4N30.Lw8JK42o13CXk5DwSnh_G3uUG8G4fS07MWyT83FuZVg",
              "content-type": "application/json",
            },
          }
    
        axios(OPTIONS)
        .then(res=>
            {
                const categories=res.data.results;
               // console.log(categories);
               dispatch(getPassCat(categories));
            })
        .catch(err=>console.log(err)); 

    
}
}

export const getPassCat=(categories)=>{
    return {
        type:FETCH_PASSCAT,
        payload:categories
    }
}

export const editPassCat=(id,categories)=>{
  return {
      type:EDIT_PASSCAT,
      payload:categories,
      id:id
  }
}

export const updatePassCat=(id,category)=>{
  var OPTIONS = {
    url: "http://localhost:5000/api/update-category",
    method: "PATCH",
    data:{_id:id,pass_cat:category},
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1OTAwMjE2ODcsImV4cCI6MTU5MDA1MDQ4N30.Lw8JK42o13CXk5DwSnh_G3uUG8G4fS07MWyT83FuZVg",
      "content-type": "application/json",
    },
  }

axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));

  return {
      type:UPDATE_PASSCAT,
      payload:category,
  }
}