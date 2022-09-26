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
      <div className="sticky top-0 w-full relative flex items-center">
        <button className="bg-black"><a className="item" href={`/`}> Home </a></button>
        <button className="bg-black"><a className="item" href={`/stories`}> Stories </a></button>
        <button className="bg-black"><a className="item" href={`/profile`}> Profile </a></button>
        <button className="bg-black"><a className="item" href={`/inventory`}> Inventory </a></button>
        <div className="ml-auto text-slate-500 relative flex items-center">
            <h4>Welcome, {currentUser.username}!</h4>
            <button onClick={handleLogout} className="bg-black">Logout!</button>   
        </div>
      </div>
      </div>
    );
  }
  
  export default Navbar
  