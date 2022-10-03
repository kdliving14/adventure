import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import StoryPick from "./components/StoryPick";
import LogSign from "./components/LogSign";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chapter from "./components/Chapter"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userStories, setUserStories] = useState([])
  const [userChoices, setUserchoices] = useState([])

  useEffect(()=>{    
    fetch("/me").then((res) => {
      if(res.ok){res.json().then((currentUser)=>setCurrentUser(currentUser))
      }})
    fetch("/userstories").then((res)=>{
      if(res.ok){res.json().then((stories)=>setUserStories(stories))}})
    fetch("/userchoices").then((res) => {
      if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}})
    }, []); 

  return(<div className="bg-black min-h-screen ">
    {currentUser ? 
    <div>
      <Navbar 
        setCurrentUser={setCurrentUser} 
        name = {currentUser.name} 
        image={currentUser.image_url}
      />
      <Routes>
            <Route index element={
              <Home left_off={currentUser.left_off}/>}
            />
            <Route path="/profile" element={
              <Profile 
                      setCurrentUser={setCurrentUser} 
                      name={currentUser.name} 
                      username={currentUser.username} 
                      image_url={currentUser.image_url}
                      user_id={currentUser.id} 
                      stories={userStories} 
                      userchoices={userChoices}/>}
              />
            <Route path="/events" element={
              <Chapter 
                      event_id={currentUser.left_off === null ? 1 : currentUser.left_off} 
                      user_id={currentUser.id}
                      userstory={userStories}
                      story_id={1}/>}
                      />
            <Route path="/stories" element={
              <StoryPick 
                      user_id={currentUser.id} 
                      userstories ={userStories}
                      setUserStories={setUserStories}/>}
                      />
      </Routes>
    </div> 
      :
    <div>
      <LogSign />
      <Routes>
        <Route path="/login" element={<Login updateUser={setCurrentUser}/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <footer className="fixed bottom-0 z-20 w-full items-center bg-zinc-900 justify-between ">
      <ul className="flex flex-wrap text-center mt-1 text-sm text-gray-400">
          <li className="flex-1"> 
            <a href="https://www.linkedin.com/in/karter-livingston/" target="_blank" rel="noreferrer" className="mr-4 hover:underline">LinkedIn</a>
          </li>
          <li className="flex-1">
            <a href="https://github.com/kdliving14" target="_blank" rel="noreferrer" className="mr-4 hover:underline">Github</a>
          </li>
          <li className="flex-1">
              <a href="https://dev.to/kdliving14" target="_blank" rel="noreferrer" className="mr-4 hover:underline">Blog</a>
          </li>
      </ul>
  </footer> */}

  </div>)
  }

export default App;
