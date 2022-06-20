import React,{useState} from 'react'
import { Link,useHistory } from "react-router-dom";
import axios from "axios";

import './register.css'
function Register() {
    const [user,setUser]=useState({username:"",email:"",password:"",phone:""})
    const history=useHistory()
    function handleChange(e:any){
        setUser({...user,[e.target.name]:e.target.value})
    }
   async function handleSubmit(e:any){
        e.preventDefault()
        try {
            const res=await axios({method:'post',url:'http://localhost:5000/api/v1/auth/register',headers: {},data:{...user}}) 
            console.log(res);
            if(res){
                history.push('/login')
            }
        } catch (error) {
            console.log(error);
            
        }
            
    }

  return (
    <div className='rgstrContainer'>    

        <form className='rgstrInnerContainer' onSubmit={handleSubmit}>
        <Link to={'/'}className="close"><p >x</p></Link>
            <div className='inputlabel'>
            <h2>Register</h2>
                <label>Name</label>
                <input value={user.username} onChange={handleChange} name='username' />
            </div>
            <div className='inputlabel'>
                <label>Email</label>
                <input onChange={handleChange} value={user.email} name='email' />
            </div>
            <div className='inputlabel'>
                <label>password</label>
                <input onChange={handleChange} value={user.password} name='password' />
            </div>
            <div className='inputlabel'>
                <label>Phone</label>
                <input onChange={handleChange} value={user.phone} name='phone' />
            </div>
            <button className='btnrgstr'>submit</button>
            <Link className='rgstrlog' to='/login'>Login</Link>
        </form>
    </div>
  )
}

export default Register