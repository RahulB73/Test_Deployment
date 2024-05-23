"use client"

import axios from "axios";
import { useState } from "react";


const LoginPage = () => {
    const [inputs, setInputs] = useState({});

    const handleInput = (e: { target: { name: any; value: any; }; }) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://test-deployment-mocha.vercel.app/api/login", inputs)
            console.log(res)
            alert("You have been logged in ..")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email :
                    <input type="text" name="email" onChange={handleInput} />
                </label>
                <label htmlFor="">Password :
                    <input type="password" name="password" onChange={handleInput} />
                </label>
                <button onClick={handleSubmit}> Submit </button>
            </form>
        </div>

    );
}

export default LoginPage;
