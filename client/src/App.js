import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import StoryPick from "./components/StoryPick";
import Inventory from "./components/Inventory";
import LogSign from "./components/LogSign";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chapter from "./components/Chapter"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userchoices, setUserchoices] = useState([])
  const [stories, setStories] = useState([])
  const [inventory, setInventory] = useState([])

  useEffect(()=>{
    fetch("/me").then((res) => {
      if(res.ok){
        res.json().then((currentUser)=>setCurrentUser(currentUser))
        .then(fetch("/userchoices").then((res)=>{if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}}))
        .then(fetch("/stories").then((res)=>{if(res.ok){res.json().then((stories)=>setStories(stories))}}))
        .then(fetch("/inventories/:id").then((res)=>{if(res.ok){res.json().then((inventory)=>setInventory(inventory))}}))
      }else{
        console.log(res)
      }})
  }, []); 

return(<div>
  {currentUser ? 
  <div>
    <Navbar setCurrentUser={setCurrentUser} image={currentUser.image_url}/>
    <Routes>
          <Route path="/profile" element={<Profile name={currentUser.name} username={currentUser.username} image_url={currentUser.image_url}/>}></Route>
          <Route path="/events/:id" element={<Chapter/>}></Route>
          <Route path="/stories" element={<StoryPick stories={stories} />}></Route>
          <Route path="/inventory" element={<Inventory inventory={inventory} />}></Route>
          <Route exact path="/" element={<Home left_off= {currentUser.left_off} userchoices={userchoices}/>}></Route>
    </Routes>
  </div> 
    :
  <div>
    <LogSign />
    <Routes>
      <Route path="/login" element={<Login updateUser={setCurrentUser}/>}></Route>
      <Route path="/signup" element={<Signup updateUser={setCurrentUser}/>}></Route>
    </Routes>
  </div>}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <footer className="fixed bottom-0 left-0 z-20 p-4 w-full shadow flex items-center justify-between bg-zinc-900">
    <ul className="flex flex-wrap mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
          <span className="mr-4 hover:underline md:mr-6">
            About
          </span>
            {/* <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a> */}
        </li>
        <li>
          <span className="mr-4 hover:underline md:mr-6">
            LinkedIn
          </span>
            {/* <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a> */}
        </li>
        <li>
         <span className="mr-4 hover:underline md:mr-6">
            Github
          </span>
            {/* <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a> */}
        </li>
        <li>
          <span className="mr-4 hover:underline md:mr-6">
            Blog
          </span>
            {/* <a href="#" class="hover:underline">Contact</a> */}
        </li>
    </ul>
</footer>

</div>)}

export default App;
