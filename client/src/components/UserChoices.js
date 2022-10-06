
function UserChoices({event, choice, image_url}){
return (
    <div className="w-56 mx-auto mt-4 p-5 rounded-lg border shadow-md bg-black border-gray-700">
        {image_url === "" ? null : <img className="object-contain h-48 m-auto rounded-lg" src={image_url} alt="choice"/>}
        <h2 className="font-bold tracking-tight text-white">Event:</h2> 
        <p className="font-normal text-gray-400">{event}</p>
        <br></br>
        <h2 className="font-bold tracking-tight text-white">Choice:</h2>
        <p className="font-normal text-gray-400">{choice}</p>
    </div>
)
}

export default UserChoices