import { useEffect, useState } from "react"

import StoryCard from "./StoryCards"

function StoryPick({user_id, userstories, setUserStories}){
    
    const [stories, setStories] = useState([])

    useEffect(()=>{    
        fetch("/stories").then((res) => {
          if(res.ok){res.json().then((stories)=>setStories(stories))}})
      }, []);

    return(<div>
        <br></br>
        {stories.map((story)=>(
                <StoryCard 
                key = {story.id}
                story_id = {story.id}
                title = {story.name}
                description = {story.description}
                image_url = {story.image_url}
                trigger_warnings = {story.trigger_warnings}
                user_id = {user_id}
                userstories = {userstories}
                setUserStories = {setUserStories}
                />
            ))} 
    </div>)
}

export default StoryPick