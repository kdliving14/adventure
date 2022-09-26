import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function LoginSignup({updateUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmitLogin(e) {
    
        e.preventDefault();

        fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
        })
        .then((r) => {
        if (r.ok){r.json().then(user => {updateUser(user); 
        navigate(`/`)
        })}
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmitLogin}>
            <h1>Login</h1>
            <label htmlFor="username">Username: </label>
                <input 
                type="text" 
                name="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/><br></br>
            <label>Password: </label>
                <input type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/><br></br>
            <button type="submit" className="bg-black">Login</button>
        </form>
      </div>
    )      
}
export default LoginSignup