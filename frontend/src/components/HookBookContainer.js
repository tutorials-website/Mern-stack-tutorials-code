import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyBook} from '../redux';

function HookBookContainer() {
    const numberOfBooks=useSelector(state=>state.numberOfBooks);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
    <h2>Number of Books - {numberOfBooks}</h2>
            <button onClick={()=>dispatch(buyBook())}>BuyBook</button>
        </div>
    )
}
export default HookBookContainer;