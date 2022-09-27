import UserChoices from "./UserChoices"
import {useNavigate} from "react-router-dom"
import {Button} from "flowbite-react"

function Home({currentUser, userchoices}){

    const navigate = useNavigate();

    function handleContinue(){

    }

    function handleNewStory(){
        navigate(`/stories`)
    }

    return(<div>
        <br></br>
        {currentUser.left_off === null ? <Button onClick={handleNewStory}>Start a Story</Button> : <Button onClick={handleContinue}>Continue Story?</Button> }
        
        {currentUser.left_off === null ? null : <div> 
            <br></br>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Your choices so far:</h5>
                <br></br>
                
                <div className="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
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