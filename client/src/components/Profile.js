import { useNavigate } from "react-router-dom"

import User from "./images/user.png"
import Linkedin from "./images/linkedin.png"
import Github from "./images/github.png"
import Blog from "./images/dev.png"

function Profile({setCurrentUser, name, username, image_url, stories, user_id})
{
    const navigate = useNavigate()

    function handleReset(e){
        if(window.confirm("Are you sure you want to reset your progress for this story?")){
            fetch(`/userstories/${e.target.name}`,{
                method:'DELETE',
                headers: {'Content-Type': 'application/json'}
                })
            fetch("/chosen", {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ left_off:null })
                }).then(res => {
                            if(res.ok){ 
                                alert("Your story progress has been reset.")
                                window.location.reload();
                                // navigate('/stories')
                            }})
        }
        else {alert("Story progress reset canceled.")}
    }
        
    function handleDeleteAccount(){
        if(window.confirm("Are you sure you want to delete your account?")){
            fetch(`/users/${user_id}`,{
                    method:'DELETE',
                    headers: {'Content-Type': 'application/json'}
                  })
                  .then(res => {
                    if(res.ok){
                        setCurrentUser(null)
                        alert("Your account has been deleted.")
                        navigate('/')
                    } else {res.json().then(data => console.log(data))}
                  })
        }
        else{
            alert("Account Deletion has been canceled.")
        }
    }

    return(<div className="text-center grid grid-cols-2 pt-10">
        <div className="m-auto w-48 p-2 rounded-lg border shadow-md text-white bg-black border-gray-700">
            {image_url==="" ? 
                  <div className="inline-flex relative justify-center items-center">
                    <img src={User} alt="User"/>
                  </div> 
                  : 
                  <img src={image_url} alt="user"/>
                }  
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <button 
                className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center h-10 bg-gray-100 hover:bg-gray-500"
                onClick={()=>{handleDeleteAccount()}}>
                Delete Account
            </button>
        </div>
        <div>
        {stories.length===0 ? null : 
        <div>
            <p>Stories:</p>
            {stories?.map((story)=>
                <div className="m-auto p-2 w-32 rounded-lg border shadow-md text-white text-center bg-black border-gray-700" key={story.id}>
                    <p className="text-white">{story.story.name}</p>
                    <button 
                        name={story.id}
                        className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
                        onClick={(e)=>{handleReset(e)}}>
                        Reset Progress
                    </button>
                </div>)}
            <br></br>
        </div>}
        <br></br>
        <div className="m-auto w-32 rounded-lg border text-white bg-black border-gray-700 ">
            <p>Creator Links:</p>
            <div className="flex flex-wrap justify-between items-center px-2 py-2">
                    <a href="https://www.linkedin.com/in/karter-livingston/" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Linkedin} alt="LinkedIn" className="w-7"/>
                    </a>
                    <a href="https://github.com/kdliving14" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Github} alt="Github" className="w-7"/>
                    </a>
                    <a href="https://dev.to/kdliving14" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Blog} alt="Blog" className="w-7"/>
                    </a>
            </div>
        </div>
    </div>
 </div>)
}

export default Profile