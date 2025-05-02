// import { StrictMode, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Register from './Register'
// import UserProfile from './useState'
// import Name from './Name'
// import Atask from './Atask'
// import Ctask from './Ctask'
// import './input.css'
// import Arrow from './Arrow'
// import Greeting from './Propsclass'
// import Person from './Person'
// import People from './People'
// import Counter from './useState'
// import BasicExample from './useState'
// import Counter from './useState'
// import Name from './Name'
// import Cherry from './Cherry'
import './App.css'
// import React from 'react'
// import Nameprovider  from './NameProvider'
// import Home from './Home'
// import Mycomponent from "./Mounting"

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Table from './components/Table';




function App() {
  // const [count, setCount] = useState(0)

  return (
    //  <>
    //    <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
      

    //   <h1>WELCOME TO REACT</h1>
    // </>
    // <>
    // {/* <One/> */}
    
    // {/* <Student/> */}
    // {/* <Student name="kalai"/> */}

    // {/* <Name/> */}
    //  </>

  //   <>
  //   {/* <Arrow/> */}
  //  {/* <Greeting/> */}
  //  {/* <Person name="subha"/>
  // <Person/> */}
  // {/* <People name="kalaivani"/>
  // <People/> */}
  // </>

//    <Nameprovider>
// <Home/>
// </Nameprovider>

  //  <Mycomponent/>
  // <Router>
  //    <Routes>
  //     <Route path="/Home" element={<Home/>}/>
  //     <Route path="/About" element={<About/>}/> 
  //     <Route path="/Contact" element={<Contact/>}/>
  //    </Routes>
  //   </Router>
  <>
  {/* <Register/> */}

  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  
 
  
  </>
  
  )
}

export default App
