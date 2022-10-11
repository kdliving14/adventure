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
            .then(fetch("/chosen", {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ left_off:null })
                }).then(res => {
                            if(res.ok){ 
                                alert("Your story progress has been reset.")
                                window.location.reload();
                            }else{
                                res.json().then(res=>console.log(res))
                            }}))
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

    return(<div>
        <div className="text-center m-auto w-80 mt-10 p-5 rounded-lg border shadow-md text-white bg-black border-gray-700">
            {image_url==="" ? 
                  <div className="inline-flex relative justify-center items-center">
                    <img src={User} alt="User"/>
                  </div> 
                  : 
                  <img src={image_url} alt="user"/>
                }  
            <p className="pt-4 text-lg">Name: {name}</p>
            <p className="p-4 text-lg">Username: {username}</p>
            <button 
                className="text-black font-medium rounded-lg text-large px-2.5 py-2 text-center h-10 bg-gray-100 hover:bg-gray-500"
                onClick={()=>{handleDeleteAccount()}}>
                Delete Account
            </button>
        </div>
        <br></br>
        <div>
        {stories.length===0 ? null : 
        <div>
            {stories?.map((story)=>
                <div className="m-auto p-4 w-48 rounded-lg border shadow-md text-white text-center bg-black border-gray-700" key={story.id}>
                    <p className="text-white pb-2">{story.story_name}</p>
                    <button 
                        name={story.id}
                        className="text-black font-medium rounded-lg text-large px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
                        onClick={(e)=>{handleReset(e)}}>
                        Reset Progress
                    </button>
                </div>)}
        </div>}
        <br></br>
        <div className="text-center m-auto w-48 pt-5 rounded-lg border text-white bg-black border-gray-700 ">
            <p>Creator Links:</p>
            <div className="flex flex-wrap justify-between items-center px-5 pb-5 pt-3">
                    <a href="https://www.linkedin.com/in/karter-livingston/" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Linkedin} alt="LinkedIn" className="w-10"/>
                    </a>
                    <a href="https://github.com/kdliving14" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Github} alt="Github" className="w-10"/>
                    </a>
                    <a href="https://dev.to/kdliving14" target="_blank" rel="noreferrer" className="hover:underline">
                        <img src={Blog} alt="Blog" className="w-10"/>
                    </a>
            </div>
        </div>
    </div>
 </div>)
}

export default Profile