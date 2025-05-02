// import {useEffect} from "react";
// function Mycomponent(){
//     useEffect(()=>{
//         console.log("hi")
//     },[]);
//     return(
//         <div>
//             <h1>hi</h1>
//         </div>
//     )

// }
// export default Mycomponent

// import {useEffect,useState} from "react";
// function Mycomponent(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log(`count changed to:${count}`);
//     },[count]); 

//     useEffect(()=>{
//         console.log("hi");
        

//     },[]);
//     return(
//         <div>
//             <h2>hello</h2>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>

//         </div>
//     );
// }
// export default Mycomponent


// import { useEffect, useState } from "react";

// function MyComponent() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Timer running");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       console.log("Timer cleared");
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default MyComponent;

// //class component 1

// import React from "react";

// class MyComponent extends React.Component {
//   componentDidMount() {

//     console.log("hi");
//   }

//   render() {
//     return (
//       <div>
//         <h1>hi</h1>
//       </div>
//     );
//   }
// }

// export default MyComponent;

//class component 2

// import React from "react";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     console.log("hi");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(`count changed to: ${this.state.count}`);
//     }
//   }

//   incrementCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h2>hello</h2>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MyComponent;

//class component 3

// import React, { Component } from "react";

// class MyComponent extends Component {
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("Timer running");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Timer cleared");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }

// export default MyComponent;