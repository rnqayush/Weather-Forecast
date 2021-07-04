import { createStore,combineReducers } from "redux";

import data from "./reducers/data";

const reducers = combineReducers({
    data: data
})


const store=createStore(reducers)

export default store