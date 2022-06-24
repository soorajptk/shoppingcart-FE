import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import {fetchCart,addCart,deleteCart} from '../../apiCalls/apiCalls'
function Cart() {
  const dispatch=useDispatch()
  const {cartReducer:{CartItems},AuthReducer:{user}}=useSelector((state:any)=>state)

  useEffect(()=>{
    dispatch<any>(fetchCart())
    // eslint-disable-next-line
  },[])


  return (
    <div className='cartContainer'>
        {
          CartItems?.response?.map((item:any,ind:any)=>{
            const {product_name,price,product_id,qty}=item
            
            return <div key={ind} className='cartinnerContainer' >
              <p>{product_name}</p>
              <p><span className={item?.offerPrice && 'strike'}>{price}</span> <span>{item?.offerPrice}</span></p>
              <div>
                <h2 onClick={()=>dispatch<any>(addCart(product_id))}>+</h2>
                <p>{qty}</p>
                <h2 onClick={()=>dispatch<any>(deleteCart(product_id))}>-</h2>
              </div>
            </div>}) 
      }
      <div>
        <h2>Total Price</h2>
        <h2 className="price">{ CartItems.total}</h2>
      </div>
      {CartItems.response?.length>0 && <Link className='placeorder' to={{pathname:'/checkout',state:CartItems}}>Place Order</Link>}
      </div>
  )
}

export default Cart