import UserChoices from "./UserChoices"
import {useNavigate} from "react-router-dom"

function Home({currentUser, userchoices}){

    const navigate = useNavigate();

    function handleContinue(){

    }

    function handleNewStory(){
        navigate(`/stories`)
    }

    return(<div>
        {currentUser.left_off === null ? null : <div> Your choices so far: 
                <br></br>
                <br></br>
                {userchoices.map((choice)=> (
                    <UserChoices
                        key= {choice.id}
                        event = {choice.event.short_description}
                        choice = {choice.choice.content}/>
                    ))} 
            </div>}
        
            
        {currentUser.left_off === null || currentUser.left_off === 0 ? <button className="bg-black" onClick={handleNewStory}>Start a Story</button> : <button className="bg-black" onClick={handleContinue}>Continue Story?</button> }
    </div>)
}

export default Home