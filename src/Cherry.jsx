import React from "react";
import Banana from "./Banana";
function Cherry(props){
    return (
     <>
        <h1>Cherry: {props.cherry}</h1>  
        <h1>Cherry1: {props.cherry1}</h1>
        <Banana banana="viji" banana1="26"/>

     </>
   

);
}
export default Cherry