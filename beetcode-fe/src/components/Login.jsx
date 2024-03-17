import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = ({ text, signUp, setsignUp}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/login`, data)
        .then(response => {
            if (response.data["message"] =="ok"){
                console.log(response.data["token"])
                localStorage.setItem('token',response.data["token"]);
                navigate('/problems')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const changeState = () => {
        setsignUp(false);
      };

      const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null; // Return true if token is present, false otherwise
      }
      
      // Function to handle redirection based on authentication status
      const handleRedirect=() => {
        if (isAuthenticated()) {
          // User is authenticated, redirect to a different page
          window.location.href = '/problems'; // Example: Redirect to dashboard page
        } else {
          // User is not authenticated, continue normal flow
          // Maybe show login form or homepage content
        }
    }

    handleRedirect()
      

    return (
        <div className="pb-10 ml-[15%] mt-[20%] px-10 pt-10 w-full rounded-3xl shadow-2xl shadow-[#F28705]">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <label className="text-[#F28705]">{text}</label>
                <br/>
                <label>Username</label>
                <br/>
                <input {...register("username")} className="w-full focus:outline-none appearance-none focus:border-[#F28705] bg-[#2c2929] mb-2 border-b-[1px] border-white border-solid text-white" />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" {...register("password")} className="w-full focus:outline-none focus:border-[#F28705] appearance-none bg-[#2c2929] border-b-[1px] border-white border-solid text-white"/>

                <input type="hidden" {...register("type")} value="login"/>
                <br/>
                <div className="">
                    {signUp ? (
                        <a className=" mt-2 text-xs flex justify-end" href="/reset-password">Forgot Password?</a>
                    ) : (
                        <span>No password reset link available.</span>
                    )}
                    <div className="grid grid-cols-3"> 
                        <span className="col-span-2">
                            <button onClick={changeState} className=" text-white mr-10 mt-1  border-2 px-2 border-white border-solid rounded-2xl"><small>New User?</small></button>
                        </span>
                        <button type="submit" className="mt-1 bg-green-600 p-1 px-2 rounded-md">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login