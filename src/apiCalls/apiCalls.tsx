import axios, { AxiosRequestConfig} from 'axios';

import {fetchProductsFail,fetchProductsSuccess,fetchProductsReq,fetchSlider, fetchLink} from '../redux/product/genaralAction'
// const fetchProductsUrl=process.env.REACT_APP_PRODUCTS
const fetchSliderUrl=process.env.REACT_APP_SLIDER
const fetchLinksUrl=process.env.REACT_APP_LINKS
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
  
export const fetchProducts=()=>{
    console.log(process.env.REACT_APP_PRODUCTS);
    return function(dispatch:any){
        dispatch(fetchProductsReq())
        axios(config).then(response=>dispatch(fetchProductsSuccess(response))).catch(err=>dispatch(fetchProductsFail()))
    }
}

export const fetchSliderData=()=>{
    return function(dispatch:any){
       axios(slider).then(data=>dispatch(fetchSlider(data.data))).catch(err=>console.log(err.response))
    }

}
export const fetchLinkData=()=>{
    return function(dispatch:any){
       axios(links).then(data=>dispatch(fetchLink(data.data))).catch(err=>console.log(err.response))
    }

}