import { Actions } from "../../model";
import { CLOSE_TOGGLE, LOGOUT, MODAL_TOGGLE } from "../actionTypes";
let avail:any=localStorage.getItem("user")

const initailState = {
  user:JSON.parse(avail),
  toggle: false,
  err:""
};

export const AuthReducer = (state: any = initailState, action: Actions) => {
  switch (action.type) {
    case "AUTHENTICATION":
        localStorage.setItem("user",JSON.stringify(action.payload))
        return { ...state, user:action.payload,err:""};
    case MODAL_TOGGLE:
      return { ...state, toggle: action.payload };

    case CLOSE_TOGGLE:
      return { ...state, toggle: action.payload };
    case LOGOUT:
      localStorage.removeItem("user")
       return {...state,user:null}
    default:
      return state;
  }
};
