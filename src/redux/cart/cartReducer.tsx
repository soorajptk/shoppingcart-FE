import { CART } from "../actionTypes";
import {CartType,Actions} from '../../model'
const initialState = {
  CartItems: [],
};
interface initialGenaral{
  CartItems:CartType[]
}

export const cartReducer = (state:initialGenaral = initialState, action:Actions) => {
  switch (action.type) {
    case CART:
      const { id, product } = action.payload;
      const pro = product.find((item) => item.id === id);
      if (state.CartItems.length !== 0) {
        const avail  = state.CartItems.find((item) => item.id === pro?.id);
        if (avail) {
          return {
            ...state,
            CartItems: state.CartItems.map((item) =>
              item.id === avail.id ? {...item,amount: item.amount + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            CartItems: [...state.CartItems, { ...pro, amount: 1 }],
          };
        }
      } else {
        return {
          ...state,
          CartItems: [...state.CartItems, { ...pro, amount: 1 }],
        };
      }
    default:
      return state;
  }
};
