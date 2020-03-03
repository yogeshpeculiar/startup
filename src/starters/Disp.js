import React from 'react';
import welcomeImage from '../img/img1.jpg';
import logo from '../img/logo.jpg';
var  welcomeImageStyleContent={
    width: "100%",
    height: "700px",
    backgroundImage: "url(" +welcomeImage + ")"
};
var logoStyleContent={
   width:"18%",
   height:"13%",
   position:"absolute",
   top:"20%",
   bottom:"70%",
   right:"30%",
   left:"40%"
}
var welconeMessageStyleContent={
    position:"absolute",
    top:"50%",
    color:"white",
    backgroundColor:"red",
    border:"5px",
    width:"100%",
    textAlign:"center",
    opacity: "0.6"
}
const Disp=()=>{

    return (
        <div>
      <div style={welcomeImageStyleContent} ></div>
        <img src={logo} style={logoStyleContent} alt="loading.."/>
         <h1 style={welconeMessageStyleContent} >WELCOMES YOU</h1>
        </div>
    );
}

export default Disp;
