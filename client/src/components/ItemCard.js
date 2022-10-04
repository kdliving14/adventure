function ItemCard({name, description, image_url}){
    return (<div
        className="px-2 py-2 w-40 rounded-lg border shadow-md text-white bg-black border-gray-700">
        <img 
            className="object-contain h-20 w-20 mx-auto my-auto rounded-lg"
            src={image_url === "" ? "https://protkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" : 
            image_url
            } 
            alt={name}/>
        <p className="text-center">{name}</p> 
        <p className="font-normal text-gray-400">{description}</p>
    </div>)
}

export default ItemCard