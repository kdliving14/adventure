
function UserChoices({event, choice, image_url}){
return (
    <div className="p-5">
        <img className="rounded-t-lg" src={image_url} alt="choice" />
        <h2 className="mb-2 font-bold tracking-tight text-white">Event:</h2> 
        <p className="mb-3 font-normal text-gray-400">{event}</p>
        <br></br>
        <h2 className="mb-2 font-bold tracking-tight text-white">Choice:</h2>
        <p className="mb-3 font-normal text-gray-400">{choice}</p>
    </div>
)
}

export default UserChoices