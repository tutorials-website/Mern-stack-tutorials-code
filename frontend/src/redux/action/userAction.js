import {SIGNUP_USER} from './userType';
const axios = require('axios');

export const signupUser=(username,email,password,confirmPassword)=>{

    return function(dispatch){
   var OPTIONS = {
        url: "http://localhost:5000/userapi/signup",
        method: "POST",
        data:{
            username:username,
            email: email,
            password:password,
            confirmpassword:confirmPassword
            },
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYWRlZXAiLCJ1c2VyaWQiOiI1ZTliNjYwYzk4NjY5MTU4ZmY3NzQ3ZjgiLCJpYXQiOjE1OTA1MTczNzksImV4cCI6MTU5MDU0NjE3OX0.LMj36aAfOhJ9ALjBdgKouiA_sOcPYtcrtJcFzidNy8o",
          "content-type": "application/json",
        },
      }

    axios(OPTIONS).then(res=>{
      const message=res.data.message;
      dispatch({
        type:SIGNUP_USER,
        payload:message
    })
    }
       
        )
    .catch(err=>console.log(err));
   
}
}
