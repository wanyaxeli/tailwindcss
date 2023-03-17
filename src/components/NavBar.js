import React from "react";
import logo from '../images/click.png';
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
    const navigate=useNavigate()
    const handleLogin =()=>{
        navigate('/login')
    }
    const handlehome =()=>{
        navigate('/')
    }
    return(
        <div className="bg-yellow-500 h-auto w-full ">
            <header className="max-w-5xl mx-auto items-center flex justify-between  py-1 h-full">
                <div className="w-30 h-30">
                    <img src={logo} className="h-10 w-15 rounded-sm"/>
                </div>
                <ul className="flex space-x-20 text-white cursor-pointer">
                    <li onClick={handlehome} >Home</li>
                    <li>About</li>
                    <li>Property</li>
                    <li>Testmonial</li>
                    <li>Contact</li>
                </ul>
                <div onClick={handleLogin} >
                    <p className="text-white font-md cursor-pointer">Login</p>
                </div>
            </header>
        </div>
    )
}
export default Navbar