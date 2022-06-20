export default interface product {
  id: number;
  name: string;
  price: string;
  url: string;
  desc: string;
  category: string;
}
export interface CartType {
  id: number;
  amount: number;
  name: string;
  price: string;
  url: string;
  desc: string;
  category: string;
}
export type sliderData = {
  text: string;
  url: string;
};

export type LinksModel = {
  category: string;
  path: string;
};
export type Actions =
  | { type: "CART"; payload: { id: number; product: product[] } }
  | { type: "SEARCH"; payload: { value: string } }
  | { type: "FETCH_DATA-REQ"; payload: { isLoading: boolean } }
  | {
      type: "FETCH_DATA-SUCCESS";
      payload: { products: product[]; isLoading: boolean };
    }
  | { type: "FETCH_DATA-FAIL"; payload: { error: string; isLoading: boolean } }
  | { type: "FETCH_SLIDER_DATA"; payload: { data: sliderData[] } }
  | { type: "FETCH_LINK_DATA"; payload: { data: LinksModel[] } }
  | { type: "AUTHENTICATION"; payload: any }
  | { type: "MODALTOGGLE"; payload: { toggle: boolean } }
  | { type: "CLOSETOGGLE"; payload: { toggle: boolean } }
  | { type: "LOGOUT"; payload: { logged: boolean } };

export type MainState = {
  cartReducer: { CartItems: CartType[] };
  genaralReducer: {
    product: product[];
    isLoading: Boolean;
    link: LinksModel[];
  };
};
