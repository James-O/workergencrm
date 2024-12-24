'use client'

import React, { useState } from 'react'
//import logo from "../assets/cheflogo1.png"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx"

function NavMenu() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='ml-auto mr-40'>
            {/* <div className="bg-white/80 shadow-md fixed top-0 left-0 z-40 w-full ease-in duration-300 backdrop-blur-md"> */}
            <div className=" nav flex ease-in duration-300">
                <div className=" px-10 sm:px-4 md:px-6 lg:px-6 container ml-auto">

                    <div className="flex items-center justify-between">
                        <div className='lg:flex hidden gap-8 items-center '>
                            <a href='' className='text-[#191919] font-bold hover:text-red-500'>Short chart</a>
                            <a href='' className='text-[#191919] font-bold hover:text-red-500'>Focused vied</a>
                            <a href='' className='text-[#191919] font-bold hover:text-red-500'>New</a>
                            <a href='' className='text-[#191919] font-bold hover:text-red-500'>Refresh</a>
                            <a href='' className='text-[#191919] font-bold hover:text-red-500'>colaborate</a>
                            {/* <button className='bg-red-900 active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-semibold text-white'>login</button> */}
                        </div>
                        <div className="block lg:hidden z-40 mt-4" onClick={handleNav}>
                            {
                                nav ? (<RxCross2 size={25} className='text-[#191919] cursor-pointer' />) : (<TiThMenu className='text-red-500 cursor-pointer' size={25} />)
                            }
                        </div>
                        <div className={`lg:hidden absolute sm:w-1/3 md:w-1/4 sm:h-2/5 px-4 py-2 text-xs font-medium top-16 ${nav ? "" : "hidden"}`}>
                            <div className='flex flex-col gap-8 relative bg-white/80 py-8 px-3'>
                                <a href='' className='text-[#191919] text-xl font-semibold hover:text-red-500'>Short chart</a>
                                <a href='' className='text-[#191919] text-xl font-semibold hover:text-red-500'>Focused view</a>
                                <a href='' className='text-[#191919] text-xl font-semibold hover:text-red-500'>New</a>
                                <a href='' className='text-[rgb(25,25,25)] text-xl font-semibold hover:text-red-500'>Refresh</a>
                                <a href='' className='text-[#191919] text-xl font-semibold hover:text-red-500'>colaborate</a>
                                {/* <button className='bg-red-900 active:scale-90 w-1/2 transition duration-100 transform hover:shadow-xl shadow-md rounded-full pl-4 pr-16 py-2 text-xl font-semibold text-white'>login</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu