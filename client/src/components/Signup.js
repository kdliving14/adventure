import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {Button} from "flowbite-react"

function Signup(){

    const [errors, setErrors] = useState([])
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
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({username, name, password, image_url})
        })
        .then(res => {if(res.ok)
            {res.json().then(() => {
                alert("Account made successfully. Please login with the account details you used.");
                navigate(`/login`)
            })}
        })
        .catch(res => {setErrors(res.error); console.log(errors)})
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return(<div>
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
        <h1>Signup</h1>
        <label className="text-white">First Name: </label>
            <input 
            type="text" 
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleChange}/><br></br>
        <label className="text-white">Profile Image URL: </label>
            <input type="text"
            name="image_url"
            autoComplete="off"
            value={image_url}
            onChange={handleChange}/><br></br>
        <label className="text-white">Username: </label>
            <input 
            type="text" 
            name="username"
            autoComplete="off"
            value={username}
            onChange={handleChange}/><br></br>
        <label className="text-white">Password: </label>
            <input type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}/><br></br>
        <Button type="submit">Submit</Button>
    </form>    
    </div>)

}

export default Signup