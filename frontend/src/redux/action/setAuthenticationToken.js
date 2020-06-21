import axios from "axios";

export default function setAuthenticationToken(token){
   
   if(token){
     axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
   }else{
       delete axios.defaults.headers.common['Authorization'];
   }
}