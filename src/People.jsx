import React from "react";
function People(props){
    return(
        <>
        <h2>Name:{props.name}</h2>
        </>
    )
}
People.defaultProps={
    name:"Guest"
}
export default People



