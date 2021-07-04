import { ADD_DATA } from "../constants";

const data =(state=[], action)=>{

    switch(action.type){
        case ADD_DATA:
            return  [...state,action.payload]

    }
    return state
}

export default data