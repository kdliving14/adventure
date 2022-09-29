import {useNavigate} from "react-router-dom"

import UserChoices from "./UserChoices"


function Home({userchoices, left_off}){

    const navigate = useNavigate();

    function handleContinue(){
        if(left_off===0){
            navigate(`/events/1`)
        }
        else{
            navigate(`/events/${left_off}`)
        }
    }

    function handleNewStory(){
        navigate(`/stories`)
    }

    return(<div className="mx-5 justify-between text-center">
        <br></br>
        {left_off === null ? 
        <button onClick={handleNewStory} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-zinc-900 hover:bg-gray-500">Start a Story</button> 
        : 
        <button onClick={handleContinue} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-zinc-900 hover:bg-gray-500">Continue Story?</button> }
        
        {left_off === null ? null : <div> 
            <br></br>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Your choices so far:</h5>
                <br></br>
                <div className="w-56 m-5 rounded-lg border shadow-md bg-zinc-900 border-gray-700">
                {userchoices.map((choice)=> (
                    <UserChoices
                        key= {choice.id}
                        event = {choice.event.short_description}
                        choice = {choice.choice.content}
                        image_url ={choice.choice.image_url}/>
                    ))} 
                    </div>
            </div>}
    </div>)
}

export default Home