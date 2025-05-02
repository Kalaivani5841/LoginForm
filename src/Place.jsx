import React from "react";
import Phone from "./Phone"
function Place(props){
    return(
        <>
        <h1>Place:{props.place}</h1>
        <Phone phone="76437"/>
        </>
    );
}
export default Place