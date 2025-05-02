import React from "react";
import Apple from "./Apple";


function Banana(props){
    return (
     <>
       
        <h1>Banana: {props.banana}</h1>
        <h1>Banana1: {props.banana1}</h1>
        <Apple apple="kalai" apple1="21"/>
        
     </>
   

);
}
export default Banana