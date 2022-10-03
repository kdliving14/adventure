function UserChoices({event, choice, image_url}){
return (
    <div className="block p-5">
        <img className="object-contain h-48 mx-auto my-auto rounded-lg"
            src={image_url === "" ? "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" : image_url} 
            alt="choice"/>
        <h2 className="font-bold tracking-tight text-white">Event:</h2> 
        <p className="font-normal text-gray-400">{event}</p>
        <br></br>
        <h2 className="font-bold tracking-tight text-white">Choice:</h2>
        <p className="font-normal text-gray-400">{choice}</p>
    </div>
)
}

export default UserChoices