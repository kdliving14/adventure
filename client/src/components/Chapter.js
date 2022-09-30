import { useEffect, useState } from "react"
import useSound from 'use-sound';

import Rain from "./assets/Rain-Interior.mp3";

function Chapter({id}){

    const [chapter, setChapter] = useState([])
    const [play] = useSound(Rain)

    useEffect(()=>{
        fetch(`/events/${id}`).then((res) => {
        if(res.ok){
            res.json().then((chapter)=>{setChapter(chapter)})
        }else{
            console.log(res)
        }})
    }, [id]); 

    const {image_url, name, long_description, choices} = chapter

    console.log("before click", id)


    function handleClick(e){
        id = e.target.value

        console.log("after click",id)


        fetch(`/events/${id}`).then((res) => {
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
                <p>{long_description}</p>
                <div>
                    {choices?.map(c=>(
                    <div>
                        <br></br>
                        <button
                            className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
                            value={c.next_event_id}
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