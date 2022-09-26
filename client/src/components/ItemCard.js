
function ItemCard({name, description, image_url}){
// console.log(name)
    return (<div>
        <img src={image_url} alt={name}/>
        {name}: { } 
        {description}
    </div>)
}

export default ItemCard