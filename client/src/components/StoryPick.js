import StoryCard from "./StoryCards"

function StoryPick({stories}){

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