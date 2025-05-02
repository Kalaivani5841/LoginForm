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