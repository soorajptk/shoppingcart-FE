import React,{useEffect,useState} from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import { useDispatch,useSelector} from "react-redux";
import {checkAddress,addAddress,addOrder} from '../../apiCalls/apiCalls'

function Checkout() {
    const {state} = useLocation()
    const [adrs,setAdrs]=useState({address:"",State:"",district:"",pincode:"",landmark:"",phone:""})
    const {orderReducer:{address,address_id}}=useSelector(state=>state)
    const dispatch=useDispatch()
    const history=useHistory()

    useEffect(()=>{
        dispatch(checkAddress())
    },[])
    const handleChange=(e)=>{
        const {name,value}=e.target 
       setAdrs((prev)=>{return{...prev,[name]:value}}) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addAddress(adrs))
    }
    const handleBuy=({orderItems,total,addressId})=>{
        dispatch(addOrder({orderItems,total,addressId}))
        alert("success fully purchased")
        history.push('/')

    }

    return (
    <div>
        <form className={address ? 'formcondtion':'addressform'} onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor={'address'}>Address</label>
            <input value={adrs.address} onChange={(e)=>handleChange(e)} id='address' name='address'/>
            <br/>
            <label htmlFor={'state'}>State</label>
            <input value={adrs.State} onChange={(e)=>handleChange(e)} id='state' name='State' />
            <br/>
            <label htmlFor={'district'}>District</label>
            <input value={adrs.district} onChange={(e)=>handleChange(e)} id='district' name='district' />
            <br/>
            <label htmlFor={'pincode'}>Pin Code</label>
            <input id='pincode' value={adrs.pincode} onChange={(e)=>handleChange(e)} name='pincode' />
            <br/>
            <label htmlFor={'landmark'}>Landmark</label>
            <input id='landmark'value={adrs.landmark} onChange={(e)=>handleChange(e)} name='landmark'/>
            <br/>
            <label htmlFor={'phone'}>Phone</label>
            <input id='phone' value={adrs.phone} onChange={(e)=>handleChange(e)} name='phone' />
            <button className='addressSubmit'>submit</button>
        </form>


       {address && <div className='cartContainer'>
        {
          state.response?.map((item:any,ind:any)=>{
            const {product_name,price,product_id,qty}=item
            
            return <div key={ind} className='cartinnerContainer' >
              <p>{product_name}</p>
              <p><span className={item?.offerPrice && 'strike'}>{price}</span> <span>{item?.offerPrice}</span></p>
              <div>
                <p>{qty}</p>
              </div>
            </div>}) 
      }
      <div>
        <h2>Total Price</h2>
        <h2 className="price">{ state.total}</h2>
      </div>
      </div>}
      {address && <button onClick={()=>handleBuy({orderItems:state.response,total:state.total,addressId:address_id})}>Buy</button>}
    </div>
  )
}

export default Checkout