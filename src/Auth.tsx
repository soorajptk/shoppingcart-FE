import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

import React from 'react'

function PrivateRoute({ children, ...rest }:any) {
    const {AuthReducer:{user}}=useSelector((state:any)=>state)
    return (
        <Route {...rest} render={()=> user ? children :<Redirect to={'/'}/>} ></Route>
  )
}

export default PrivateRoute