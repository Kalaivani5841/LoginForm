import React,{Component} from "react";
class Person extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}
 Person.defaultProps={
    name:"kalai"
}
export default Person