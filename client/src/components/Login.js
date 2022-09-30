import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {TextInput, Button} from "flowbite-react"

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
            navigate(`/`)})}
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmitLogin} className="flex flex-col gap-1">
            <div className="mb-2 block">
                <br></br>
            <label className="text-white">Username: </label>
                <TextInput
                type="text" 
                name="username"
                autoComplete="off"
                required={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
            <div className="mb-2 block">
            <label className="text-white">Password: </label>
                <TextInput 
                type="password"
                name="password"
                autoComplete="off"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Button type="submit">Login</Button>
        </form>
      </div>
    )      
}
export default LoginSignup