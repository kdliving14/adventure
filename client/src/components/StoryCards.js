import { useNavigate } from "react-router-dom"

function StoryCard({title, description, image_url, trigger_warnings, user_id, story_id, userstories, setUserStories}){
    const navigate = useNavigate();

    // console.log("Story id: ",story_id)
    // console.log("User id: ", user_id)
    // console.log("Userstory: ", userstories)
    
    function handleClick(e){
        e.preventDefault()

        if(userstories?.find(e => e.story.id === story_id)){
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
    
    return(<div className="m-auto px-2 py-3 w-96 rounded-lg border shadow-md text-white bg-zinc-900 border-gray-700 justify-between">
        <img 
            className="object-contain h-50 w-100 mx-auto my-auto rounded-lg"
            src={image_url === "" ? "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" 
                : image_url} 
            alt={title}/>

        <br></br>

        <h1 className="text-center text-2xl">{title}</h1>

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
                className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
                onClick={(e)=>{handleClick(e)}}>
                    Start
            </button>
        </div>
    </div>)

}
export default StoryCard

//className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
