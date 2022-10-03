import { useEffect, useState } from "react"
import useSound from 'use-sound';

import Rain from "./assets/Rain-Interior.mp3";

function Chapter({event_id, user_id}){

    const [chapter, setChapter] = useState([])
    const [play] = useSound(Rain)

    useEffect(()=>{
        fetch(`/events/${event_id}`).then((res) => {
        if(res.ok){res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }, [event_id]); 

    const {image_url, name, long_description, choices} = chapter
    let choice_id = 0;

    function handleClick(e){
        event_id = e.target.value
        choice_id = e.target.name

        fetch("/chosen", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ left_off:event_id })
        })

        fetch("/userchoices", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ event_id:event_id, choice_id:choice_id, user_id:user_id })
        })

        fetch(`/events/${event_id}`).then((res) => {
        if(res.ok){
            res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }

    return <div>
            {/* <button onClick={play} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-zinc-900 hover:bg-gray-500">Sound</button>  */}
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
                    <div className="text-center">
                        <br></br>
                        <button
                            className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
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