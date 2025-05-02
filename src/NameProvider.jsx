// import React,{ createContext,useState} from "react";
// export const NameContext=createContext();
// export const NameProvider=({children})=>{
//     const[name,setName]=useState('john dae');

//     return(
//         <NameContext.Provider value={{name,setName}}>
//             {children}
//         </NameContext.Provider>

//     )
// }
// export default NameProvider

// import React,{ createContext, useContext,useState} from "react";
//  const NameContext=createContext();

// export const useName =()=> useContext(NameContext);
// export const NameProvider=({children})=>{
//     const[count, setCount]=useState(0);
//     const[Age,setAge]=useState();

//     const increment = ()=> setCount(number => number + 1);
//     const decrement = ()=> setCount(number => number  - 1);
//     const age=()=>setAge ();

//     return(
//      <NameContext.Provider value={{count, increment, decrement,Age,age}}>
//         {children}
//      </NameContext.Provider>
//     )
// }
// export default NameProvider


// import React, { createContext, useContext, useState } from "react";

// const NameContext = createContext();

// export const useName = () => useContext(NameContext);

// export const NameProvider = ({ children }) => {
//     const [count, setCount] = useState(0);
//     const [Age, setAge] = useState("");

//     const increment = () => setCount(prev => prev + 1);
//     const decrement = () => setCount(prev => prev - 1);

//     return (
//         <NameContext.Provider value={{ count, increment, decrement, Age, setAge }}>
//             {children}
//         </NameContext.Provider>
//     );
// };

// export default NameProvider;

import React, { createContext, useContext, useState } from "react";

const NameContext = createContext();

export const useName = () => useContext(NameContext);

export const NameProvider = ({ children }) => {
    // const [count, setCount] = useState(0);
    const [Name, setName] = useState("");


    return (
        <NameContext.Provider value={{ Name, setName }}>
            {children}
        </NameContext.Provider>
    );
};

export default Input;