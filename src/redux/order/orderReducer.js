
const initialState = {
address:false,
orderItems:[],
address_id:null
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKADDRESS":
        const {address}=action.payload
        if(address){
        return {...state,address,address_id:action.payload.address_id}
        }
    return {...state,address}
    case "ADDADDRESS":
        const {response}=action.payload
        return {...state,address_id:response}
    default:
      return state;
  }
};
