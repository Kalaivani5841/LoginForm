// import { useState } from "react";
// function Counter(){
//     const [count,setCount]= useState(0);

//     return(
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={()=> setCount(count+1)}>Increment</button>
//         </div>
//     );
// }
// export default Counter


// import React from "react";

// function useState(){
//     return (
//      <>
        
//         <tr>
//         <td><lable for="name">NAME:</lable></td>
//         <td><input type="text" id="name" name="name"></input></td>
//         </tr>
//         </>

// );
// }
// export default useState


// import { useState } from "react";
// function Counter(){
// const [count, setCount]= useState(0);

// return(
//     <div>
//          <tr>
//         <td><lable for="name">NAME:</lable></td>
//         <td><input type="text" id="name" name="name"></input></td>
//        </tr>

// <tr>
//         <td><lable for="name">Age:</lable></td>
//         <td><input type="text" id="age" name="age"></input></td>
//         </tr>

//         <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} placeholder="type something.."/>
//         <p>you typed:{count}</p>

//         <input type="text"  onChange={(e)=>setCount(e.target.value)} placeholder="type something.."/>
//         <p>you typed:{count}</p>
//     </div>
// );
// }

// export default Counter


// import { useState } from "react";
// function Counter(){
//     const [isvisible, setIsvisible]=useState(false); 

//     return(
//         <div>
//             <button onClick={()=>setIsvisible(!isvisible)}> 
//                 {/* {isvisible?"On": "Off"} */}
//                 </button>
//                 {isvisible?"on": "off"}

//             {isvisible && <h2>Hello, kalai</h2>}
            
//         </div>
//     )
// }
// export default Counter

// import { useState,useEffect } from "react";
// function Counter(){

// const[count,setCount]=useState(0);
// useEffect(()=>{
//     console.log("component rendered!")
// });
// return(
//     <div>
//                <p>Count: {count}</p>
//                <button onClick={()=> setCount(count+1)}>Increment</button>
//            </div>
// )
// }
// export default Counter

// import { useState,useEffect } from "react";
// function Counter(){

// const[count,setCount]=useState(0);
// useEffect(()=>{
    
//     fetch('https://fakestoreapi.com/products/1')
//        .then(res=>res.json())
//        .then((result)=>setCount(result));
   
// },[]);

// return(
//     <div>
//     Data:{JSON.stringify  (count)}
//     </div>
// )
// }
// export default Counter

// import Table from 'react-bootstrap/Table';

// function BasicExample() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default BasicExample;

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// export default function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar alt="arnav" src="src/assets/img1.jpeg"/>
//       <Avatar alt="Travis" src="src/assets/imgs2.jpeg" />
//       <Avatar alt="Cindy" src="src/assets/img3.jpeg"/>
//     </Stack>
//   );
// }

// import { useState, useEffect } from "react";

// function UserProfile({moni}) {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         console.log("Fetching data...");
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => setUserData(data))
//             .catch((error) => console.error("Error fetching data:", error));
//     }, [moni]);

//     return (
//         <>
//             <h2>{JSON.stringify(userData)}</h2>
//         </>
//     );
// }

// export default UserProfile;


import { useState, useEffect } from "react";

function UserProfile({ moni }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        console.log("Fetching data...");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [moni]);

    return (
        <div>
            <h2>User IDs:</h2>
            <ul>
                {userData.map(user => (
                    <li key={user.username}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;