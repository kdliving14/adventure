import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import UserChoices from "./UserChoices"

function Home(){
    
    const [userchoices, setUserchoices] = useState([])

    useEffect(()=>{    
        fetch("/userchoices").then((res) => {
          if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}})
        }, []); 

    const navigate = useNavigate();

    function handleContinue(){navigate("/chapters")}

    function handleNewStory(){navigate(`/story`)}

    return(<div className="mx-5 justify-between text-center">
        <br></br>
        {userchoices.length=== 0 ? 
        <button onClick={handleNewStory} className="text-white font-xl rounded-lg text-xl px-2.5 py-2 text-center m-auto border border-gray-500 bg-black hover:bg-gray-500">Start a Story</button> 
        : 
        <div> 
            <button onClick={handleContinue} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 border border-gray-500 bg-black hover:bg-gray-500">Continue Story?</button> 
            <br></br>
            <br></br>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Your choices so far:</h5>
            <div>
                <div className="grid grid-cols-3 gap-3 justify-center">
                {userchoices?.map((choice)=> (
                    <UserChoices
                        key= {choice.id}
                        event = {choice.event.short_description}
                        choice = {choice.choice.content}
                        image_url ={choice.choice.image_url}/>
                    ))} 
                </div>
            </div>
        </div>}
    </div>)
}

export default Home
