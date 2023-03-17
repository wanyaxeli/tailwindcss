import React from "react";
import about from '../images/about-img.png'
const About=()=>{
    return(
        <div className="bg-yellow-500 w-full h-auto">
            <div className="max-w-5xl  py-4 mx-auto flex justify-between ">
                <div className="text-white h-60 mt-3 flex-[.45] ">
                  <h1 className="my-4 font-bold">About us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="my-4 bg-white  hover:bg-[#eee] text-black px-3 py-1 rounded-md cursor-pointer">Read More</button>
                </div>
                <div className="flex-[.45]  h-60  mt-2">
                    <img className="h-full  w-full object-cover rounded-md" src={about} />
                </div>
            </div>
        </div>
    )
}
export default About