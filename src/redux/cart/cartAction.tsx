import {CART} from "../actionTypes"
import prdct from '../../model'
interface props{
    id:string,
    product:prdct[]
}
export const cartStore=(data:props)=>{
    return {
        type:CART,payload:data
    }
}

