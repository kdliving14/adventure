// import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import { Button } from "flowbite-react";

import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import StoryPick from "./components/StoryPick";
import Inventory from "./components/Inventory";

// import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [stories, setStories] = useState([])
  const [inventory, setInventory] = useState([])
  const [userchoices, setUserchoices] = useState([])

  const updateUser = (user) => setCurrentUser(user)

  const [logsign, setLogsign] = useState(true);

  useEffect(()=>{
    fetch("/me").then((res) => {if(res.ok){res.json().then((currentUser)=>setCurrentUser(currentUser))}})
    fetch("/stories").then((res)=>{if(res.ok){res.json().then((stories)=>setStories(stories))}})
    fetch("/inventories/:id").then((res)=>{if(res.ok){res.json().then((inventory)=>setInventory(inventory))}})
    fetch("/userchoices").then((res)=>{if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}})
  }, []); 

  if (currentUser){
    return (<div>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <Routes>
              <Route path="/profile" element={<Profile currentUser={currentUser}/>}></Route>
              <Route path="/stories" element={<StoryPick stories={stories}/>}></Route>
              <Route path="/inventory" element={<Inventory inventory={inventory}/>}></Route>
              <Route exact path="/" element={<Home currentUser={currentUser} userchoices={userchoices}/>}></Route>
        </Routes>
      </div>)
  }else{
    return (<div>
      <Button size="md" onClick={()=>setLogsign(!logsign)}>{logsign ? "Signup": "Login"}</Button>
      {logsign ? <Login updateUser={updateUser} /> : <Signup updateUser={updateUser}/>}
    </div>)
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />