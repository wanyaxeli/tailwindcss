import React from "react";
const CreateAccount=()=>{
    return(
     <div className="w-full h-full shadow-md rounded-md p-3">
        <h1 className="mt-2">Create account</h1>
        <form>
            <input type='text' className="w-full placeholder:text-black h-[30px] border-b border-b-black my-3 focus:outline-none" placeholder='First name' />
            <input type='text' className="w-full h-[30px] border-b placeholder:text-black border-b-black my-3 focus:outline-none" placeholder='Last name' />
            <input type='email' className="w-full h-[30px] border-b border-b-black my-3 placeholder:text-black focus:outline-none" placeholder='Email' />
            <input type='password' className="w-full h-[30px] border-b border-b-black my-3 focus:outline-none placeholder:text-black" placeholder='Password' />
            <input type='password' className="w-full h-[30px] border-b border-b-black my-3 focus:outline-none placeholder:text-black" placeholder='Confirm password' />
        </form>
    </div>
    )
}
export default CreateAccount