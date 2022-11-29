import { combineReducers } from "redux";
import accountReducer from "./accountReducer"

// tong hop cac reducer thanh 1 reducer duy nhat bang ham combineReducers, tra ve 1 reducer duy nhat
const reducers = combineReducers({
    account: accountReducer
})

export default reducers