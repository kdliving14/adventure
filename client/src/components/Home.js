import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import UserChoices from "./UserChoices"

function Home({left_off}){
    
    const [userchoices, setUserchoices] = useState([])
    // console.log(userchoices)
    // console.log(left_off)

    useEffect(()=>{    
        fetch("/userchoices").then((res) => {
          if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}})
        }, []); 

    const navigate = useNavigate();

    function handleContinue(){
        navigate("/events")
    }

    function handleNewStory(){
        navigate(`/stories`)
    }

    return(<div className="mx-5 justify-between text-center">
        <br></br>
        {left_off === null || left_off===0 ? 
        <button onClick={handleNewStory} className="text-white font-xl rounded-lg text-xl px-2.5 py-2 text-center m-auto border border-gray-500 bg-black hover:bg-gray-500">Start a Story</button> 
        : 
        <button onClick={handleContinue} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 border border-gray-500 bg-black hover:bg-gray-500">Continue Story?</button> 
        }
        
        {userchoices.length=== 0 ? 
            (left_off === 1 ? 
                <div>
                    <br></br>
                    <p className="text-white">You have started a story but you haven't made any decisions yet.</p>
                </div>
            :
            null)
        : 
        <div> 
            <br></br>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Your choices so far:</h5>
            <div>
                <div 
                className="grid grid-cols-3 gap-3 justify-center"
                >
                {userchoices?.map((choice)=> (
                    <UserChoices
                        key= {choice.id}
                        event = {choice.event.short_description}
                        choice = {choice.choice.content}
                        image_url ={choice.choice.image_url}/>
                    ))} 
                    </div>
            </div>
        </div>
            }
            
    </div>)
}

export default Home