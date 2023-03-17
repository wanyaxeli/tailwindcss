import React from "react";
import img1 from '../images/img-1.png'
import { Data } from "./data";
const Products = ()=>{
    return(
        <div className="max-w-5xl mx-auto h-auto text-center">
          <h1 className="my-3 font-bold">Products</h1>
          <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
         <div className="flex flex-wrap gap-3  items-center max-w-full mb-3  h-auto mx-auto" >
           {Data.map(item=>{
            return(
            <div key={item.id} className="w-[24.12%]  h-60 shadow-md rounded-md  hover:cursor-pointer hover:shadow-lg">
                <div className="w-full h-[70%]">
                    <img src={item.url} className="h-full rounded-tl-md rounded-tr-md w-full"/>
                </div>
                <div className="h-[30%] w-full flex flex-col justify-center items-center">
                        <p className="capitalize">{item.name}</p>
                        <button className="bg-yellow-500 rounded-md px-10 text-white py-1 mt-1 cursor-pointer hover:bg-yellow-400">View</button>
                </div>
           </div>
            )
           })}
         </div>
        </div>
    )
}
export default Products