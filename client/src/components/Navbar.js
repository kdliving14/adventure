// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
// import {Navbar} from "flowbite";

function Navbar({setCurrentUser, currentUser}) {
    
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(()=> setCurrentUser(null));
    }
    
    return (
        <div>
          {/* <Navbar
            fluid={true}
            rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link
              href="/"
              active={true}>
      Home
    </Navbar.Link>
    <Navbar.Link href="/stories">
      Stories
    </Navbar.Link>
    <Navbar.Link href="/inventory">
      Inventory
    </Navbar.Link>
    <Navbar.Link href="/Profile">
    Profile
    </Navbar.Link>
    <button onClick={handleLogout} className="bg-black">Logout!</button>
  </Navbar.Collapse>
</Navbar> */}
      <div className="sticky top-0 w-full relative flex items-center">
        <button className="bg-black"><a className="item" href={`/`}> Home </a></button>
        <button className="bg-black"><a className="item" href={`/stories`}> Stories </a></button>
        <button className="bg-black"><a className="item" href={`/inventory`}> Inventory </a></button>
        <div className="ml-auto text-slate-500 relative flex items-center">
          <button className="bg-black"><a className="item" href={`/profile`}> Welcome, {currentUser.username}! </a></button>
          <button onClick={handleLogout} className="bg-black">Logout!</button>   
        </div>
      </div>
      </div>
    );
  }
  
  export default Navbar
  