import {BUY_BOOK} from './bookType';

export const buyBook=(number=1)=>{
    return {
        type:BUY_BOOK,
        payload:number
    }
}