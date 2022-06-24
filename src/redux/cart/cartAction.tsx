import {CARTSTORE} from "../actionTypes"
// import prdct from '../../model'
// interface props{
//     id:string,
//     product:prdct[]
// }
export const cartStore=(data:any)=>{

    return {
        type:CARTSTORE,payload:data
    }
}

// export const cartDelete=(data:props)=>{
//     return {
//         type:CART,payload:data
//     }
// }
// export const cartAdd=(data:props)=>{
//     return {
//         type:CART,payload:data
//     }
// }
