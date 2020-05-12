import {createStore,applyMiddleware} from 'redux';
import passReducer from './reducer/passReducer';
const thunkMiddleware =require('redux-thunk').default;

//const routeReducer=combineReducers({});
const store=createStore(passReducer,applyMiddleware(thunkMiddleware));

export default store;