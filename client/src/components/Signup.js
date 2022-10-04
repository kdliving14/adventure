import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Signup(){

    const [errors, setErrors] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        username:"",
        password:"",
        image_url:""
    })

    const {name, username, password, image_url} = formData

    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()

        fetch(`/users`,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({username, name, password, image_url})
        })
        .then((res) => {
            if (res.ok){res.json().then(() => {alert("Account made successfully. Please login with the account details you used."); navigate(`/login`)})}
            else{res.json().then(data => {setErrors(data.errors)})}})
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    let err;

    if (errors){
        err = [...new Set(errors)]
    }
    
    return(<div className="w-80 m-auto">
    <br></br>
    {err ? err?.map(e=>(<h1 key={e} className="text-white text-center">{e}</h1>)) : null}
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
            <input  
                type="text" 
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                placeholder="First Name"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"/>
            <input  
                type="text"
                name="image_url"
                autoComplete="off"
                value={image_url}
                onChange={handleChange}
                placeholder="Profile Image URL"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"/>
            <input
                type="text" 
                name="username"
                autoComplete="off"
                value={username}
                onChange={handleChange}
                placeholder="Username"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"/>
            <input  
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="text-sm rounded-lg block w-full p-2.5 caret-red-700 focus:ring-red-700 focus:border-red-700 focus:placeholder-red-700 bg-zinc-700 border-gray-500 placeholder-gray-300 text-white"/>
        <br></br>
        <button 
            className="text-white font-medium rounded-lg text-sm px-2.5 py-2 border border-gray-100 bg-black hover:bg-gray-500"
            type="submit">
                Submit
        </button>
    </form>    
    </div>)

}

export default Signup