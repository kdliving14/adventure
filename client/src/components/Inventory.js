import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import ItemCard from "./ItemCard";

function Inventory(){

    const [inventory, setInventory] = useState([])
    const navigate = useNavigate();
   
    useEffect(()=>{    
        fetch("/inventories").then((res) => {
          if(res.ok){
            res.json().then((inventory)=>setInventory(inventory))}})
      }, []);

    function handleNoInventory(){
      navigate(`/stories`)
    }

    return(<div>
        <br></br>{inventory.length === 0 ? 
          <div className="text-center">
            <p className="text-white text-center">
              You don't have any items in your inventory at this time.
            </p>
            <br></br>
            <button 
              className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500"
              onClick={()=>{handleNoInventory()}}>
                  Start a new story
            </button>
          </div>
        :
          inventory.map(item=>(
              <ItemCard 
                  key = {item.item.id}
                  name ={item.item.name}
                  image_url = {item.item.image_url}
                  description ={item.item.description}/>))
        } 
    </div>)
}
export default Inventory