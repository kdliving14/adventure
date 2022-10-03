// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import { useNavigate } from "react-router-dom";
// import useSound from 'use-sound';

// import Rain from "./assets/Rain-Interior.mp3";

function Navbar({name, setCurrentUser, image}) {

  const navigate = useNavigate()
    
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        }).then(()=> setCurrentUser(null))
        navigate("/login")
    }

    return (
        <div>
          <nav className="bg-zinc-900 px-3">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a className="block pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/`}>
                  <span>Home</span></a>
                <a className="block pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/stories`}> 
                  <span>Stories</span> </a>
                {/* <a className="block py-2 pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/inventory`}> 
                  <span>Inventory</span> </a> */}
                {/* <button onClick={play} className="text-white font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-zinc-900 hover:bg-gray-500">
                  Sound
                </button>  */}
                <a className="block pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 justify-end" href={`/profile`}> 
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                {image==="" ? 
                  <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-500">
                    <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  </div> 
                  : 
                  <img src={image} alt="user"/>
                }
                  </div>
                </a>
                <button type="button" onClick={handleLogout} className="text-black font-medium rounded-lg text-sm px-2.5 py-2 text-center mr-0 bg-gray-100 hover:bg-gray-500">
                  Logout
                </button>
            </div>
          </nav>
        </div>
    );
  }
  
  export default Navbar