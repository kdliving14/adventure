function LogSign(){
    return (<div 
                className="flex items-center justify-center w-screen">
        <br></br><br></br>
        <div className="inline-flex rounded-md shadow-sm">
        <a href="/login"  className="text-base px-6 py-3.5 text-center font-medium text-white bg-zinc-900 rounded-l-lg border border-gray-200 hover:bg-gray-500 hover:text-gray-300 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-300">
            Login
        </a>       
        <a href="/signup" className="text-base px-6 py-3.5 text-center font-medium text-white bg-zinc-900 rounded-r-md border border-gray-200 hover:bg-gray-500 hover:text-gray-300 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-300">
            Signup
        </a>
        </div>
      </div>)
}
export default LogSign