import {SIGNUP_USER} from '../action/userType';
const initialState={
   isLoggedIn:false,
   username:'',
   email:'',
   user_id:'',
   password:'',
   confirmPassword:'',
    action:'Signup',
    msg:''
}

const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case SIGNUP_USER:return{
            ...state,
            msg:action.payload
        }
        
        default:return state;
    }
}

export default userReducer;