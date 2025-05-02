// import React,{ useContext } from "react";
// import { NameContext } from "./NameProvider"
// const Home=()=>{
//     const {name,setName}=useContext(NameContext);
//     return(
//         <div>
//             <h1>Name:{name}</h1>
//             <button onClick={()=> setName ('kalai')}>change
//             </button>
//         </div>
//     );
// };
// export default Home

// import React from "react";
// import { useName } from "./NameProvider"; 

// const Home = () => {
//     const { count, increment, decrement, Age, setAge } = useName();

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>

//             <br /><br />

//             <label htmlFor="age">Age:</label>
//             <input
//                 type="text"
//                 id="age"
//                 value={Age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Enter your age"
//             />

//             <p>You typed: {Age}</p>
//         </div>
//     );
// };

// export default Home;

import React from "react";
import { useName } from "./Input"; 

const Home = () => {
    const{Name, setName } = useName();

    return (
        <div>
           
            <br /><br />

            <label For="name">Name:</label>
            <input
                type="text"
                id="name"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your name"
            />

            <p>You typed: {Name}</p>
        </div>
    );
};

export default House;