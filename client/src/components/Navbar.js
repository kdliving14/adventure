// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

function Navbar({setCurrentUser, currentUser}) {
    
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(()=> setCurrentUser(null));
    }

    return (
        <div>
          <nav class="bg-gray-900 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
              <a className="flex items-center" href={`/`}> <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Home</span> </a>
            <button type="button" className="py-2 px-4 text-sm font-medium border-t border-b border-gray-200 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
              <a className="item" href={`/stories`}> Stories </a></button>
              <button type="button" className="py-2 px-4 text-sm font-medium border-t border-b border-gray-200 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
              <a className="item" href={`/inventory`}> Inventory </a></button>
              <button type="button" className="py-2 px-4 text-sm font-medium border-t border-b border-gray-200 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
              <a className="item" href={`/profile`}> Welcome, {currentUser.username}! </a></button>
            <button type="button" className="py-2 px-4 text-sm font-medium rounded-r-md border border-gray-200 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white" onClick={handleLogout}>
              Logout!</button>
              </div>   
          </nav>
        </div>
    );
  }
  
  export default Navbar
  