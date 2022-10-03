import { useNavigate } from "react-router-dom"

function Profile({setCurrentUser, name, username, image_url, stories, user_id, userchoices})
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
                })
            userchoices.find(e => e.user_id === user_id ?
            fetch(`/userchoices/${e.id}`,{
                method:'DELETE',
                headers:{'Content-Type':'application/json'}
            }).then(res => {
                if(res.ok){ 
                    alert("Your story progress has been reset.")
                    navigate('/')
                } else {res.json().then(data => console.log(data))}
            }): console.log("no choices made"))
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

    return(<div className="text-white text-center" >
        <br></br>
        <p>Profile!</p>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        {image_url==="" ? null : <p>Image Url: {image_url}</p>}
        <br></br>
        <br></br>
        {stories.length===0 ? null : <div><p>Stories:</p>
        {stories?.map((story)=>
        <div>
            <p className="text-white">{story.story.name}</p>
            <button 
                name={story.id}
                className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
                onClick={(e)=>{handleReset(e)}}>
                Reset Progress
            </button>
        </div>)}
        </div>}
        <button 
            className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
            onClick={()=>{handleDeleteAccount()}}>
                Delete Account
        </button>
        </div>)
}

export default Profile