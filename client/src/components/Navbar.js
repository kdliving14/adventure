// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import Home from "./images/home.png"
import Story from "./images/story.png"
import User from "./images/user.png"
import Logout from "./images/logout.png"


import { useNavigate } from "react-router-dom";
// import useSound from 'use-sound';

// import Rain from "./sounds/Rain-Interior.mp3";

function Navbar({setCurrentUser, image}) {

  const navigate = useNavigate()
    
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        }).then(()=> setCurrentUser(null))
        navigate("/login")
    }

    return (
          <nav className="bg-black">
            <div className="flex items-center">
                <a className="m-auto bg-transparent cursor-pointer" href={`/`}>
                    <img src={Home} alt="Home" className="w-8"/>
                </a>
                <a className="m-auto bg-transparent cursor-pointer" href={`/stories`}> 
                  <img src={Story} alt="Story" className="h-7"/>
                </a>
                
                <a className="m-auto bg-transparent cursor-pointer" href={`/profile`}> 
                  <div className="w-10 h-10 m-auto">
                    {image==="" ? 
                      <div className="inline-flex items-center h-10">
                        <img src={User} alt="User" className="w-8"/>
                      </div> 
                      : 
                      <img className="m-auto h-8" src={image} alt="user"/>
                    }
                  </div>
                </a>
                <button type="button" onClick={handleLogout} className="m-auto w-8 cursor-pointer">
                  <img src={Logout} alt="logout" />
                </button>
            </div>
          </nav>
    );
  }
  
  export default Navbar