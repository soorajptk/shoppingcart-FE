import { CARTSTORE } from "../actionTypes";
import {Actions} from '../../model'
const initialState = {
  CartItems: {},
};


export const cartReducer = (state:any = initialState, action:Actions) => {
  switch (action.type) {
    case CARTSTORE:
    return {...state,CartItems:action.payload}
    default:
      return state;
  }
};
