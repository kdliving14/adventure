function StoryCard({title, description, image_url, trigger_warnings}){

    function handleClick(){
        
    }

    return(<div>
        <img src={image_url} alt={title}/> <br></br>
        <br></br>
        <h1>{title}</h1>
        <br></br>
        {description}<br></br>
        <br></br>
        Trigger Warning: This story contains {trigger_warnings}. 
        <br></br>
        <br></br>
        Viewer discretion is advised.
        <br></br>
        <button className="bg-black" onClick={handleClick}> Start </button>
    </div>)

}
export default StoryCard