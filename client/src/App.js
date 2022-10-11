import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import StoryPick from "./components/StoryPick";
import LogSign from "./components/LogSign";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chapter from "./components/Chapter";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userStories, setUserStories] = useState([])
  const [userChoices, setUserchoices] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(()=>{    
    fetch("/me").then((res) => {
      if(res.ok){res.json().then((currentUser)=>setCurrentUser(currentUser))}
      else{res.json().then(data => setErrors(data.error))}})
    }, []); 

  useEffect(()=>{
    fetch("/userstories").then((res)=>{
      if(res.ok){res.json().then((stories)=>{
        setUserStories(stories)
      })}
      else{res.json().then(data => setErrors(data.error))}})
    fetch("/userchoices").then((res) => {
      if(res.ok){res.json().then((userchoices)=>setUserchoices(userchoices))}
      else{res.json().then(data => setErrors(data.error))}})
  }, [currentUser]);

  return(<div className="bg-gradient-to-b from-black to-red-900 min-h-screen">
    {currentUser ? 
    <div>
      <Navbar 
        setCurrentUser={setCurrentUser} 
        name = {currentUser.name} 
        image={currentUser.image_url}
      />

      {errors ? <h1>{errors}</h1>: null}

        <Routes>
            <Route index element={
              <Home/>}
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
  </div>)
  }

export default App;
