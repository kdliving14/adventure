import { useEffect, useState } from "react"

function Chapter({event_id, userstory, story_id}){

    const [chapter, setChapter] = useState([])
    const {image_url, name, long_description, choices, id} = chapter

    const story = [...userstory].find(e => e.story.id === story_id)

    if(event_id === 0 || event_id === null){event_id = 1}

    useEffect(()=>{
        fetch(`/events/${event_id}`).then((res) => {
        if(res.ok){res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }, [event_id]); 

    function handleClick(e){
        e.preventDefault()
        console.log("Next id/left off: ",e.target.value)
        console.log("choice id",e.target.name)

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
            if (res.ok) {res.json().then((chapter)=>{setChapter(chapter)})}
            else {console.log(res)}
        })
    }

    return <div className="mt-10">
            <br></br>
                <div className="m-auto px-5 py-5 w-1/2 rounded-lg border shadow-md text-white bg-black border-gray-700 justify-between">
                {image_url === "" ? null : <div><img className="object-contain w-96 m-auto rounded-lg" src={image_url} alt="event"/><br></br></div>}
                
                <h1 className="text-center text-xl font-bold italic">{name}</h1>
                <br></br>
                <p className="whitespace-pre-line">{long_description}</p>
                <div>
                    {choices?.map(c=>(
                    <div key={c.id} className="text-center">
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