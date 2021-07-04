import {
    ADD_DATA
} from '../constants'

export const addData =(payload)=>{
    return{
        type:ADD_DATA,
        payload
    }
}