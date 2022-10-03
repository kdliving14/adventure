import { useEffect, useState } from "react"

function Chapter({event_id, userstory, story_id}){

    const [chapter, setChapter] = useState([])

    const {image_url, name, long_description, choices, id} = chapter

    if(event_id === 0){
        event_id = 1
    }

    const story = [...userstory].find(e => e.story.id === story_id)

    // console.log(story)

    useEffect(()=>{
        fetch(`/events/${event_id}`).then((res) => {
        if(res.ok){res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }, [event_id]); 

    function handleClick(e){
        e.preventDefault()

        // console.log("Event id: ", event_id)
        // console.log("Choice id: ", e.target.name)
        // console.log("Story id: ", story.id)

        fetch("/chosen", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ left_off:e.target.value })
        })

        fetch("/userchoices", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ event_id:id, choice_id:e.target.name, userstory_id:story.id })
        })

        fetch(`/events/${e.target.value}`).then((res) => {
        if(res.ok){
            res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }

    return <div>
            <br></br>
                <div className="m-auto px-2 py-3 w-96 rounded-lg border shadow-md text-white bg-zinc-900 border-gray-700 justify-between">
                <img 
                    className="object-contain h-50 w-100 mx-auto my-auto rounded-lg"
                    src={image_url === "" ? "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" 
                        : image_url} 
                    alt="event"/>
                <br></br>
                <h1>{name}</h1>
                <br></br>
                <p className="whitespace-pre-line">{long_description}</p>
                <div>
                    {choices?.map(c=>(
                    <div key={c.id} 
                        className="text-center"
                    >
                        <br></br>
                        <button
                            className="text-black font-medium rounded-lg text-sm px-1 py-2 text-center bg-gray-100 hover:bg-gray-500"
                            value={c.next_event_id}
                            name={c.id}
                            onClick={(e)=>{handleClick(e)}}
                            >
                            {c.content}
                        </button>
                    </div>))}
                </div>
            </div>
        </div>
}

export default Chapter