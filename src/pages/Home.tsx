import React from "react";
import Slider from "../components/slider/Slider";
import CardContainer from "../components/cardContainer/CardContainer";
import Links from "../components/links/Links";
import { connect} from "react-redux";
import Spinner from "./spinner/Spinner";
// import { CartType } from "../model";
// import prdct from "../model";

// type sta={
//   cartReducer:{CartItems:CartType[]},
//   genaralReducer:{product:prdct[],isLoading:Boolean}
// }
// type props={
//   loading:Boolean,
//   product:prdct[]
// }
 function Home({loading,product}:any) {
console.log(loading,product);

if(loading){
  return <div>
    <Links/>
    <Slider/>
    <Spinner/>

  </div>
}
  return (
    <div>
      <Links  />
      <Slider />
      <CardContainer prdts={product}/>

    </div>
  );
}

const mapsStateToProps=(state:any)=>{
console.log(state.cartReducer.CartItems);
  return {product:state.genaralReducer.product,loading:state.genaralReducer.isLoading}
}

export default connect(mapsStateToProps) (Home);

