import React, { useState } from "react";
import './login.css'
import {Validation} from '../../validations/validations'
import { useDispatch } from "react-redux";
import { Authaction } from "../../redux/Auth/AuthAction";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
interface credentials{
    email:string,
    password:string
}
function Login() {
    const [user,setUser]=useState<credentials>({email:"",password:""})
    const [errr,seterr]=useState<credentials>({email:"",password:""})
    const dispatch=useDispatch()
    const history =useHistory()
    const {AuthReducer:{err}}=useSelector((state:any)=>state)
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,[e.target.name]:e.target.value})        
    }
    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const status=Validation(user) 
        seterr(status)
        if(Object.values(status).length!==0)return
        try {
            const {data}=await axios({
                method:"post",url:"http://localhost:5000/api/v1/auth/login", headers:{},data:{...user}
            })     
            
        dispatch(Authaction(data))
        history.push('/dashboard')
        } catch (err) {
            console.log(err)
        }
       
    }
    
  
    return (
    <div className="loginContainer">
      <form onSubmit={(e)=>handleSubmit(e)} className="loginInnerContainer">
          <Link to={'/'}className="close"><p >x</p></Link>
          <div className="login">
        <label htmlFor="email">email</label>
        <input value={user.email} type="text" id="email" onChange={(e)=>handleChange(e)} name="email" />
        <p>{errr.email}</p>
        <label htmlFor="password">password</label>
        <input type="text" id="password" onChange={(e)=>handleChange(e)} name="password" />
        <p>{errr.password}</p>
        <button type="submit" className="loginBtn">Login</button>
        <p>{err}</p>
        <Link to={'/register'}>regsiter</Link>
        </div>
        </form>
    </div>
  );
}

export default Login;
