import { useNavigate } from "react-router-dom"

function StoryCard({title, description, image_url, trigger_warnings}){
    const navigate = useNavigate();
    
    function handleClick(){
        navigate("/events", {state:{id:1}})
    }
    
    return(<div
        className="m-auto px-2 py-3 w-96 rounded-lg border shadow-md text-white bg-zinc-900 border-gray-700 justify-between">
        <img 
            className="object-contain h-50 w-100 mx-auto my-auto rounded-lg"
            src={image_url === "" ? "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" 
                : image_url} 
            alt={title}/>
            <br></br>
        <h1 className="text-center">{title}</h1>
        <br></br>
        {description}<br></br>
        <br></br>
        Trigger Warning: This story contains {trigger_warnings}. 
        <br></br>
        <br></br>
        <p className="text-center">
            Viewer discretion is advised.
        </p>
        <br></br>
        <div className="text-center">
        <button 
            className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
            onClick={()=>{handleClick()}}
        >Start
        </button>
        
        {/* <a className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500" href={`/events/1`}> 
            <span>Start</span> 
        </a> */}
        </div>
    </div>)

}
export default StoryCard

//className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
