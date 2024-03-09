import { useForm } from "react-hook-form"
import homePage from '../public/assets/algo.svg'
import Graph from "./Graph"
const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="grid grid-cols-10 pt-4">
      <div id="mynetwork" className=" col-span-6 pt-10">
        <Graph />
      </div>
      <div className="col-span-1 text-white flex h-[45vh] w-[30%] mx-[70%] my-[15vh] rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="ml-[15%] mt-[20%]">
            <label>Username</label>
            <br/>
            <input {...register("username")} className="border-solid border-2 rounded-xl bg-[#c5d7d9] mb-2 pl-2 text-black" />
            <br/>
            <label>Password</label>
            <br/>
            <input {...register("password")} className="border-solid border-2 rounded-xl bg-[#c5d7d9] pl-2 text-black" />
            <br/>
            <div className="">
              <a className=" mt-2 text-xs flex justify-end" href="/reset-password">Forgot Password?</a>
              <div className="flex justify-end"> 
                <input type="submit" className="mt-1 bg-green-600 p-1 px-2 rounded-md"/>
              </div>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Login