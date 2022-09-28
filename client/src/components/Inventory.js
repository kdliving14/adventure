import ItemCard from "./ItemCard"

function Inventory({inventory}){
    return(<div>
        <br></br>
        {inventory.map(item=>(
            <ItemCard 
                key = {item.item.id}
                name ={item.item.name}
                image_url = {item.item.image_url}
                description ={item.item.description}/>))}
    </div>)
}
export default Inventory