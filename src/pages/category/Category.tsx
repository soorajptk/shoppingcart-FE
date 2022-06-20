// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import CardContainer from '../../components/cardContainer/CardContainer'
import Links from '../../components/links/Links'
import Slider from '../../components/slider/Slider'
import {connect } from 'react-redux'
// function Category() {
//   const {item}=useParams()
//   const [prdts,setprdts]=useState([])

//   const filterProducts = (str) => {
//     console.log(str);
//     if (str === "All") {
//       setprdts(products);
//     } else {
//       setprdts(products.filter((item) => item.category === str));
//     }
//   };
  
//   useEffect(()=>{
//       filterProducts(item)
//   },[item])
//   console.log(prdts);
//   return (

//     <div>
//         <Links/>
//         <Slider/>
//         <CardContainer prdts={prdts}/>
//     </div>
//   )
// }

// export default Category


import React, { Component } from 'react'
import Spinner from '../spinner/Spinner'
// import prdct from '../../model'
// import {CartType} from '../../model'

// type sta={
//   cartReducer:{CartItems:CartType[]},
//   genaralReducer:{product:prdct[],isLoading:Boolean}
// }
// type CategoryProps={
// match:{params:{item:string}},
// isLoading:Boolean,
// product:prdct[]
// }
// type CategoryState={
//   prdts:prdct[]
// }
 class Category extends Component<any,any> {
  constructor(props:any){
    super(props)
    this.state={
      prdts:[],

    }
  }
  
  filterProducts(){
    if (this.props.match.params.item === "All") {
      this.setState({prdts:this.props.product});
    } else {
      this.setState({prdts:this.props.product.filter((item:any) => item.category_name === this.props.match.params.item)});
    }
  };
  componentDidMount(){
    this.filterProducts()
     }
  componentDidUpdate(prevProps:any){
    if(prevProps.match.params.item!==this.props.match.params.item|| prevProps.isLoading!==this.props.isLoading){
      this.filterProducts()
    }
  }
  
  render() {
    if(this.props.isLoading){
      return <Spinner/>
    }

    return (
      <div>
         <Links/>
        <Slider/>
         <CardContainer prdts={this.state.prdts}/>

     </div>
    )
  }
}

function mapsStateToProps(state:any){
  console.log(state.cartReducer);
  return{ 
    CartItems:state.cartReducer.CartItems,product:state.genaralReducer.product,isLoading:state.genaralReducer.isLoading
  }
}

export default connect(mapsStateToProps) (Category)