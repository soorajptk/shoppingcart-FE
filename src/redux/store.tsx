import {createStore,applyMiddleware,combineReducers } from "redux";
import { genaralReducer} from "./product/genaralreducer";
import {cartReducer} from './cart/cartReducer'
import { AuthReducer } from "./Auth/AuthReducer";
import { orderReducer } from "./order/orderReducer";
const ThunkMiddleware =require('redux-thunk').default
const rootReducer=combineReducers({
    genaralReducer,
    cartReducer,
    AuthReducer,
    orderReducer
})
export const store = createStore(rootReducer,{},applyMiddleware(ThunkMiddleware));
  