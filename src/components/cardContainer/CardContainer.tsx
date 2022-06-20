import Card from "../card/Card";
import "./cardContainer.css";
import React from "react";
// import prdct from '../../model'

// interface product{
//   prdts:prdct[]
// }
export default function CardContainer(prdts:any) {
  if (prdts.prdts.length === 0) {
    return (
      <div className="noProducts">
        <h2>No products</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="title">Products</h2>
      <div className="underLine"></div>
      <div className="cardOuter-Container">
        {prdts.prdts.map((item:any, ind:any) => {
          return <Card key={ind} {...item} />;  
        })}
      </div>
    </div>
  );
}
