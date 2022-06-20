import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { sliderData } from '../../model'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface Slide{
  timer?:number,
  slider:sliderData[]

}
type SlidesState={
  count:number,
}
type StateSlide={
 genaralReducer:{slider:sliderData[]}
}
 class Slider extends Component<Slide,SlidesState> {
  constructor(props:any){
    super(props)
    this.state={
      count:0,
    }
  }
  

  // componentDidMount(){
    // this.timer=setInterval(()=>{
    //   this.checkIndex('inc')
    // },5000)
  // }
  // componentWillUnmount(){
  //   clearInterval(this.timer)
  // }

  checkIndex(check:string){
    if(check==="inc")
    {
      this.state.count<this.props.slider.length-1?this.setState((state)=>{return {count:this.state.count+1}}):this.setState({count:0})
    }
    if(check==="dec"){
      this.state.count>0?this.setState((state)=>{return{count:this.state.count-1}}):this.setState({count:this.props.slider.length-1})

    }
  }

render() {
  
    return (
      <div className="slider-InnerContainer">
        <img  className="slider-img" src={this.props.slider[this.state.count]?.url} alt="slider"/>
        <h2 className="slider-Text">{this.props.slider[this.state.count]?.text}</h2>
        <FontAwesomeIcon onClick={()=>this.checkIndex("dec")} className="leftArrow" icon={faArrowLeft}/>
        <FontAwesomeIcon onClick={()=>this.checkIndex("inc")} className="rightArrow" icon={faArrowRight}/>
      </div>
      )
  }
}

function mapsStateToProps(state:StateSlide){
  return {slider:state.genaralReducer.slider}
}

export default connect(mapsStateToProps) (Slider)