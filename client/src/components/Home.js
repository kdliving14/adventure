function Home({currentUser}){

    return(<div>
        {currentUser.left_off !== null || currentUser.left_off !== 0 ?<button className="bg-black">Continue Story?</button> :<button className="bg-black">Start a Story</button>}
        <button>Continue Story?</button>
    </div>)
}

export default Home