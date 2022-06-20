import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";

function Cart() {
  const {AuthReducer:{user}}=useSelector((state:any)=>state)
  const [cart,setCartItems]=useState([])
  
  useEffect(()=>{
    async function fetchCart(){
      const response=await axios({method:'get',url:`http://localhost:5000/api/v1/product/cart`,headers:{"Authorization":`Bearer ${user.token}`}})
      setCartItems(response.data)
    }
    fetchCart()
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <ul>
        {
          cart.map((item:any,ind)=>{
            return <li key={ind}>{item.product_name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Cart