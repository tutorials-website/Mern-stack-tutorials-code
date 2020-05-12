import {ADD_PASSCAT,FETCH_PASSCAT} from '../action/passType';
const initialState={
    category:'',
    allCategory:[]
}

const passReducer=(state=initialState, action)=>{
 
    switch(action.type){
        case ADD_PASSCAT:return{
            ...state,
            category:action.payload
        }
        case FETCH_PASSCAT:return{
            
            ...state,
            allCategory:action.payload
        }
        default:return state;
    }
}

export default passReducer;