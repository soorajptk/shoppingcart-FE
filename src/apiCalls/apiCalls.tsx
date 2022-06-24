import axios, { AxiosRequestConfig} from 'axios';
import {fetchProductsFail,fetchProductsSuccess,fetchProductsReq,fetchSlider, fetchLink} from '../redux/product/genaralAction'
import {cartStore} from '../redux/cart/cartAction'
import {checkaddress,AddAddress} from '../redux/order/orderAction'
// const fetchProductsUrl=process.env.REACT_APP_PRODUCTS
const fetchSliderUrl=process.env.REACT_APP_SLIDER
const fetchLinksUrl=process.env.REACT_APP_LINKS

axios.interceptors.request.use((request:any)=>{
  const userLocal:any=localStorage.getItem('user')
  if(userLocal){
    const user:any=JSON.parse(userLocal)
    request.headers.Authorization=`Bearer ${user?.token}`
  }
  return request
  })

const config: AxiosRequestConfig<any> = {
    method: 'get',
    headers:{"Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTY1NTI4Mzc2MSwiZXhwIjoxNjU3ODc1NzYxfQ.6ZcpRkFO1kOCp4MGohF9zWIgCHyIqYmN3tz02fl_vlE'},
    url:"http://localhost:5000/api/v1/product"
  };
  
  const slider: AxiosRequestConfig<any> = {
    method: 'get',
    url:fetchSliderUrl,

  };
  const links: AxiosRequestConfig<any> = {
    method: 'get',
    url:fetchLinksUrl
  };
  const cart: AxiosRequestConfig<any> = {
    method: 'get',
    url:"http://localhost:5000/api/v1/product/cart"
  };
  
export const fetchProducts=()=>{
    console.log(process.env.REACT_APP_PRODUCTS);
    return function(dispatch:any){
        dispatch(fetchProductsReq())
        axios(config).then(response=>dispatch(fetchProductsSuccess(response))).catch(err=>dispatch(fetchProductsFail(err)))
    }
}

export const fetchSliderData=()=>{
    return function(dispatch:any){
       axios(slider).then(data=>dispatch(fetchSlider(data.data))).catch(err=>console.log(err.response))
    }

}
export const fetchLinkData=()=>{
    return async function(dispatch:any){
     await axios(links).then(data=>dispatch(fetchLink(data.data))).catch(err=>console.log(err.response))
    }

}

export const fetchCart=()=>{
  return async function(dispatch:any){
    await axios(cart).then(data=>dispatch(cartStore(data.data))) 
  }

}

export const addCart=(product_id:number)=>{
  return async function(dispatch:any){
  const data=  await axios({method:"post",url:"http://localhost:5000/api/v1/product/addcart",data:{product_id}}) 
  console.log(data);
    
  dispatch(fetchCart())
  }
}
export const deleteCart=(product_id:number)=>{
  return async function(dispatch:any){
    await axios({method:"get",url:`http://localhost:5000/api/v1/product/deletecart/${product_id}`}) 
    dispatch(fetchCart())
  }

}
export const checkAddress=()=>{
  return async function(dispatch:any){
    await axios({method:"get",url:`http://localhost:5000/api/v1/product/order/check`}).then(data=>dispatch(checkaddress(data.data))) 
    
  }

}
export const addAddress=(address:any)=>{
  return async function(dispatch:any){
    await axios({method:"post",url:`http://localhost:5000/api/v1/product/order/addaddress`,data:address}).then(data=>dispatch(AddAddress(data.data))) 
    dispatch(checkAddress())
    
  }
}

export const addOrder=(items:any)=>{
  console.log(items);
  
  return async function(dispatch:any){
    await axios({method:"post",url:`http://localhost:5000/api/v1/product/order`,data:items})
  }
}