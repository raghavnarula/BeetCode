import Graph from "../components/Graph"
import Login from "../components/Login"
import Signup from "../components/Signup"
import { useState } from "react"

const LoginPage = () => {
  const [signUp, setsignUp] = useState(true);
  

  return (
    <div className="grid grid-cols-10 pt-4">
      <div id="mynetwork" className="h-[70vh] col-span-5 pt-10 border-solid border-1 border-white">
        <Graph />
      </div>
    <div className="flex col-span-5 text-white px-[10%] my-[10vh] ml-[20%] rounded-xl border-solid border-1 border-white">
      <div className="grid grid-cols-1">
      {signUp ? <Login text="Login" signUp={signUp} setsignUp={setsignUp}/> : <Signup text="Sign Up" setsignUp={setsignUp} signUp={signUp}/>}
      </div>
    </div>
    </div>
  )
}

export default LoginPage
