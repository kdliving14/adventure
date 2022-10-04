import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function LoginSignup({updateUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false)

    const navigate = useNavigate();

    function handleSubmitLogin(e) {
    
        e.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password })
            })
            .then((res) => {
                if (res.ok){res.json().then(user => {updateUser(user); navigate(`/`)})}
                else{res.json().then(data => setErrors(data.error))}})
    }

    return (
        <div className="w-80 m-auto">
        <br></br>
        {errors ? <h1 className="text-white text-center">{errors}</h1> : null}

        <form onSubmit={handleSubmitLogin}>
            <div className="grid gap-6 mb-2">
            <div>
                <input
                type="text" 
                name="username"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"/>
            </div>
            <div className="mb-2">
                <input
                type="password"
                name="password"
                autoComplete="off"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"
                />
            </div>
            <button 
                className="text-white font-medium rounded-lg text-sm px-2.5 py-2 border border-gray-100 bg-black hover:bg-gray-500"
                type="submit">
                    Login
            </button>
            </div>
        </form>
      </div>
    )      
}
export default LoginSignup