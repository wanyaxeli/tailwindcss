import React from "react";
import banner from '../images/banner-bg.png'
const Banner=()=>{
    return(
        <div className="w-full h-auto  relative">
            <img src={banner} className="w-full h-screen object-cover"/>
            <div className="bg-black-100 flex justify-center items-center w-full absolute top-0 h-screen">
                <div className="w-2/3  text-center h-auto text-white">
                    <h1 className="font-3xl font-bold capitalize my-4">Find a Property</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="bg-yellow-500 px-3 my-4 h-10 w-50 rounded-md hover:bg-yellow-400 cursor:pointer font-2xl">Get started</button>
                </div> 
            </div>
        </div>
    )
}
export default Banner