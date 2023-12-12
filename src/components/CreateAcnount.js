import React,{useState} from "react";
import { useOutletContext } from "react-router-dom";
const CreateAccount=()=>{
    const[details,setDatail]=useOutletContext()
    const handleInput=(e)=>{
    const  name=e.target.name
    const value=e.target.value
    setDatail({...details,[name]:value})
    }
    return(
     <div className="w-full h-full shadow-md rounded-md p-3">
        <h1 className="mt-2">Create account</h1>
        <form>
            <input value={details.first_name} name='first_name'  onChange={handleInput} type='text' className="w-full placeholder:text-black h-[30px] border-b border-b-black my-3 focus:outline-none" placeholder='First name' />
            <input value={details.last_name}  name='last_name' onChange={handleInput} type='text' className="w-full h-[30px] border-b placeholder:text-black border-b-black my-3 focus:outline-none" placeholder='Last name' />
            <input value={details.email} name='email' onChange={handleInput} type='email' className="w-full h-[30px] border-b border-b-black my-3 placeholder:text-black focus:outline-none" placeholder='Email' />
            <input value={details.password}  name='password' onChange={handleInput} type='password' className="w-full h-[30px] border-b border-b-black my-3 focus:outline-none placeholder:text-black" placeholder='Password' />
            <input  value={details.confirm_password} name='confirm_password' onChange={handleInput} type='password' className="w-full h-[30px] border-b border-b-black my-3 focus:outline-none placeholder:text-black" placeholder='Confirm password' />
        </form>
    </div>
    )
}
export default CreateAccount