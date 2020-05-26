import {ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT,DELETE_PASSCAT} from '../action/passType';
const initialState={
    category:'',
    allCategories:[],
    action:'Add',
    id:'',
    msg:''
}

const passReducer=(state=initialState, action)=>{

    switch(action.type){
        case ADD_PASSCAT:return{
            ...state,
            category:action.payload
        }
        case FETCH_PASSCAT:return{
            ...state,
            allCategories:action.payload
        }
        case EDIT_PASSCAT:return{
            ...state,
            category:action.payload,
            id:action.id,
            action:'Edit'
        }
        case UPDATE_PASSCAT:return{
            ...state,
            category:action.payload,
            msg:"Password Category Updated Successfully"
          
        }
        case DELETE_PASSCAT:return{
            ...state,
            action:'Add',
            msg:"Password Category Deleted Successfully"
          
        }
        default:return state;
    }
}

export default passReducer;