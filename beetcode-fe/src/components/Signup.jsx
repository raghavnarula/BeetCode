import { useForm } from "react-hook-form"
import axios from "axios"

const Signup = ({ text, signUp, setsignUp }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/login`, data)
        .then(response => {console.log(response.data)})
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const changeState = () => {
        setsignUp(true);
      };

    return (
        <div className="pb-10 w-full ml-[15%] mt-[20%] px-10 pt-10 rounded-3xl shadow-2xl shadow-[#F28705]">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <label className="text-[#F28705]">{text}</label>
                <br/>
                <label>Email</label>
                <br/>
                <input type="email" {...register("email")} className="w-full focus:outline-none focus:border-[#F28705] appearance-none bg-[#2c2929] border-b-[1px] border-white border-solid text-white"/>
                <br/>
                <label>Username</label>
                <br/>
                <input {...register("username")} className="w-full focus:outline-none appearance-none focus:border-[#F28705] bg-[#2c2929] mb-2 border-b-[1px] border-white border-solid text-white" />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" {...register("password")} className="w-full focus:outline-none focus:border-[#F28705] appearance-none bg-[#2c2929] border-b-[1px] border-white border-solid text-white"/>
                <br/>
                <label>Confirm Password</label>
                <br/>
                <input type="password" {...register("password2")} className="w-full focus:outline-none focus:border-[#F28705] appearance-none bg-[#2c2929] border-b-[1px] border-white border-solid text-white"/>
                <input type="hidden" {...register("type")} value="signup"/>
                <br/>
                <div className="">
                    {signUp ? (
                        <a className=" mt-2 text-xs flex justify-end" href="/reset-password">Forgot Password?</a>
                    ) : (
                        <br/>
                    )}
                    <div className="grid grid-cols-2"> 
                        <span className="">
                            <button onClick={changeState} className=" text-white mt-1 mr-10 border-2 px-2 border-white border-solid rounded-2xl"><small>Login</small></button>
                        </span>
                        <button type="submit" className="mt-1 bg-green-600 p-1 px-2 rounded-md">SignUp</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Signup