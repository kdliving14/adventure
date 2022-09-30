import { useEffect, useState } from "react"

import StoryCard from "./StoryCards"

function StoryPick(){
    
    const [stories, setStories] = useState([])

    useEffect(()=>{    
        fetch("/stories").then((res) => {
          if(res.ok){
            res.json().then((stories)=>setStories(stories))}})
      }, []);

    return(<div>
        <br></br>
        {stories.map((story)=>(
                <StoryCard 
                key = {story.id}
                id = {story.id}
                title = {story.name}
                description = {story.description}
                image_url = {story.image_url}
                trigger_warnings = {story.trigger_warnings}
                />
            ))} 
    </div>)
}

export default StoryPick