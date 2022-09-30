import { useEffect, useState } from "react"

import ItemCard from "./ItemCard"

function Inventory(){

    const [inventory, setInventory] = useState([])

    useEffect(()=>{    
        fetch("/inventories/:id").then((res) => {
          if(res.ok){
            res.json().then((inventory)=>setInventory(inventory))}})
      }, []);

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