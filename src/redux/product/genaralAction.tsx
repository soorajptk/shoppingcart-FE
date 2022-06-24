import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQ,
  FETCH_DATA_SUCCESS,
  SEARCH,
  FETCH_SLIDER_DATA,
  FETCH_LINK_DATA,
} from "../actionTypes";
import  { LinksModel } from "../../model";
type sliderData = {
  text: string;
  url: string;
};
export const searchProduct = (value: string) => {
  return {
    type: SEARCH,
    payload: value,
  };
};

export const fetchProductsReq = () => {
  return {
    type: FETCH_DATA_REQ,
    payload: { isLoading: true },
  };
};
export const fetchProductsSuccess = (response: { data:any }) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { products: response.data.response , isLoading: false },
  };
};
export const fetchProductsFail = (err:any) => {
  console.log(err)
  
  return { type: FETCH_DATA_FAIL, payload: {isLoading: false } };
};
export const fetchSlider = (data: sliderData[]) => {
  return { type: FETCH_SLIDER_DATA, payload: data };
};

export const fetchLink = (data: LinksModel[]) => {
  return { type: FETCH_LINK_DATA, payload: data };
};
