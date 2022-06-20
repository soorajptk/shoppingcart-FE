import React from "react";
import "./links.css";
// import { links } from "../../data";
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import {  LinksModel, MainState } from "../../model";

interface linkType{
  link:LinksModel[]
}
function Links(data:linkType) {
  const history=useHistory()
 const handleLinks=(link:string)=>{
  history.push(link)
 }
  return (
    <div className="header-Links">
      <ul>
        {data.link.map((item, ind) => {
          return (
            <li  key={ind}>
            {/* <Link className="link" to={`/category${item.path}`}>{item.category}</Link> */}
             <button className="link" onClick={()=>handleLinks(`/category${item.path}`)}>{item.category}</button> 
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function mapsStateToProps(state:MainState){
  return {link:state.genaralReducer.link}
}

export default connect(mapsStateToProps) (Links);
