import Logo from "./images/Logo.png"

function LogSign(){
    return (
        <div>
            <img src={Logo} alt={"logo"} className="w-36 m-auto pt-8"/>
            <div className="flex justify-center pt-5 w-screen">
                <div className="inline-flex rounded-md shadow-sm">
                    <a href="/login"  className="text-base px-6 py-3.5 text-center font-medium text-white bg-black rounded-l-lg border border-gray-200 hover:bg-gray-500 hover:text-gray-300 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-300">
                        Login
                    </a>       
                    <a href="/signup" className="text-base px-6 py-3.5 text-center font-medium text-white bg-black rounded-r-md border border-gray-200 hover:bg-gray-500 hover:text-gray-300 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-300">
                        Signup
                    </a>
                </div>
            </div>
      </div>
      )
}
export default LogSign