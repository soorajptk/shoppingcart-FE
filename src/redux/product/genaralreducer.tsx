import {
  FETCH_DATA_REQ,
  SEARCH,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FETCH_SLIDER_DATA,
  FETCH_LINK_DATA,
} from "../actionTypes";
// import prdct from "../../model";
// import { Actions ,CartType,sliderData,LinksModel} from "../../model";

const initialStore = {
  productlist: [],
  product: [],
  input: "",
  isLoading: true,
  CartItems: [],
  slider: [],
  link: [],
  errMsg:false
};
// interface initialCart{
//   productlist:prdct[],
//   product: prdct[],
//   input: string,
//   isLoading: Boolean,
//   CartItems: CartType[],
//   slider:sliderData[],
//   link: LinksModel[],
//   errMsg:boolean
// };
export function genaralReducer(state:any = initialStore, action: any) {
  switch (action.type) {
    case SEARCH:
      const value = action.payload;
      return {
        ...state,
        input: value,
        product: state.productlist.filter(
          (item: any) => item.product_name.match(`${value}`) != null
        ),
      };

    case FETCH_DATA_REQ:
      const { isLoading } = action.payload;
      return { ...state, isLoading };

    case FETCH_DATA_SUCCESS: {
      const { products, isLoading } = action.payload;
      return { ...state, isLoading, product: products, productlist: products };
    }
    case FETCH_DATA_FAIL: {
      const { isLoading } = action.payload;
      return { ...state, isLoading,errMsg:true};
    }
    case FETCH_SLIDER_DATA: {
      return { ...state, slider: action.payload };
    }
    case FETCH_LINK_DATA: {
      return { ...state, link: action.payload };
    }
    default:
      return state;
  }
}
