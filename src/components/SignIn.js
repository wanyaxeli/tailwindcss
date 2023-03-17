import React from "react";
const SignIn=()=>{
    return(
        <div className="w-full h-full shadow-md rounded-md p-3">
            <h1 className="mt-2">Sign In</h1>
            <form>
                <input type='text' className="w-full h-[30px] border-b border-b-black my-3 placeholder:text-black focus:outline-none" placeholder='First name' />
                <input type='text' className="w-full h-[30px] border-b border-b-black my-3 placeholder:text-black focus:outline-none" placeholder='Last name' />
                <input type='email' className="w-full h-[30px] border-b border-b-black my-3 placeholder:text-black focus:outline-none" placeholder='Email' />
                <input type='password' className="w-full h-[30px] border-b border-b-black placeholder:text-black my-3 focus:outline-none" placeholder='Password' />
            </form>
        </div>
    )
}
export default SignIn