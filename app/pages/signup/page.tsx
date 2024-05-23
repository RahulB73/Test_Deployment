"use client"

import axios from "axios";
import { useState } from "react";


const SignupPage = () => {
    const [inputs, setInputs] = useState({});

    const handleInput = (e: { target: { name: any; value: any; }; }) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://test-deployment-mocha.vercel.app/api/signup", inputs)
            console.log(res)
            alert("You have been sign in ..")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Client Name :
                    <input type="text" name="clientName" onChange={handleInput} />
                </label>
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

export default SignupPage;
