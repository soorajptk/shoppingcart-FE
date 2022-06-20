import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faUser} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
// import { useGlobalContext } from "../../context";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {searchProduct} from '../../redux/product/genaralAction'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LogOut } from "../../redux/Auth/AuthAction";
interface props{
input:string
}
interface Sta{
  input:string
}
function Header ({input}:props){
  // const {handleInput,input}=useGlobalContext()
  const dispatch=useDispatch()
  const {AuthReducer:{user}}=useSelector((state:any)=>state)

  console.log(input);
  const history=useHistory()
  function handleLogout(){
    dispatch(LogOut())
  } 
   function handleSearch(){
    history.push('/')
  }
    return (
      <div className="Header-Container">
        <div className="Header">
          <Link className="heading" to={'/'}><h2>Shopping</h2></Link>
          <div className="input-Container">
            <input
              type={"text"}
              value={input}
              onFocus={handleSearch}
              onChange={(e) =>dispatch(searchProduct(e.target.value))}
              placeholder={"Search"}
              className={"inptShow"}
            />
          </div>
          {user&&<Link to={'/cart'}><FontAwesomeIcon className="cart-Icon" icon={faCartShopping} /></Link>}
          <Link className="loginSec" to={user ?'/dashboard':'/login'}>{user?<FontAwesomeIcon className="cart-Icon" icon={faUser} />:<p >login</p>}</Link>     
          {user&&<p className="logout" onClick={handleLogout}>logout</p>}
          </div>
      </div>
    );
  }

 

// function mapDispatchToProps(dispatch,ownProps){
//   return {
//    Search:(value)=>dispatch(searchProduct(value)),
// }
// }

const mapsStateToProps=(state:Sta)=>{
  return {input:state.input}
  }

export default connect(mapsStateToProps) (Header);
