import React from "react";
import me from '../images/img-3.png'
const Testmonial=()=>{
    return(
        <section className="h-auto w-full  bg-yellow-500 my-4 py-4">
            <div className="max-w-5xl h-auto mx-auto flex justify-between my-5">
            <div className="flex-[.4] h-[150px] bg-[#fff] rounded-md">
                <div className="w-full h-auto flex items-center justify-center my-3">
                    <div className="rounded-full w-[60px] h-[60px] border border-sky-500">
                        <img src={me} className="w-full h-full rounded-full" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-xl">Elias Wanyama</h1>
                    <p className="font-sm">the houses on this app  are affordable </p>
                </div>
            </div>
            <div className="flex-[.4] h-[150px] bg-[#fff] rounded-md">
                <div className="w-full h-auto flex items-center justify-center my-3">
                    <div className="rounded-full w-[60px] h-[60px] border border-sky-500">
                        <img src={me} className="w-full h-full rounded-full" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-xl">Elias Wanyama</h1>
                    <p className="font-sm">the houses on this app  are affordable </p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Testmonial