import { useNavigate } from "react-router-dom"
import Default from "./images/default.png"

function StoryCard({title, description, image_url, trigger_warnings, user_id, story_id, userstories, setUserStories}){
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault()

        if(userstories?.find(e => e.story_id === story_id)){
            navigate("/events")
        }
        else{
            fetch("/userstories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ user_id:user_id, story_id:story_id })
            }).then((data)=>{setUserStories(data); window.location.reload()}).then(navigate("/events"))
        }
    }
    
    return(<div className="m-auto p-5 w-96 rounded-lg border text-white bg-black border-gray-700">
        <img 
            className="object-contain w-96 m-auto rounded-lg"
            src={image_url === "" ? Default : image_url} 
            alt={title}/>

        <br></br>

        <h1 className="text-center text-2xl font-bold italic">{title}</h1>

        <br></br>

        <p className="whitespace-pre-line">
            {description}
        </p>

        <br></br>
        
        <p>
            Trigger Warning: This story contains {trigger_warnings}.
        </p>
         
        <br></br>

        <p className="text-center">
            Viewer discretion is advised.
        </p>

        <br></br>

        <div className="text-center">
            <button 
                className="text-black font-xl rounded-lg text-xl px-2.5 py-2 text-center m-auto bg-gray-100 hover:bg-gray-500"
                onClick={(e)=>{handleClick(e)}}>
                    Start
            </button>
        </div>
    </div>)

}
export default StoryCard