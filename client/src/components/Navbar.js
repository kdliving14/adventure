// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

function Navbar({setCurrentUser, image}) {
    
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(()=> setCurrentUser(null));
    }

    return (
        <div>
          <nav className="bg-zinc-900 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a className="block py-2 pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/`}>
                  <span>Home</span></a>
                <a className="block py-2 pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/stories`}> 
                  <span>Stories</span> </a>
                <a className="block py-2 pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0 hover:text-gray-500" href={`/inventory`}> 
                  <span>Inventory</span> </a>
                <a className="block py-2 pr-4 pl-3 text-white rounded bg-transparent text-white-100 p-0" href={`/profile`}> 
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
                Logout</button>
            </div>
          </nav>
        </div>
    );
  }
  
  export default Navbar
  
// src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1661&q=80" 
