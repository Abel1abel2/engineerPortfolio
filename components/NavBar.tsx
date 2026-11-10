"use client";

import Image from "next/image";
import { useState } from "react";

const NavBar=()=> {

    const [dropDown,setDropDown]=useState(false)

    return(
        <div className='flex px-10  py-8 sm:gap-[20%]  lg:gap-[40%] w-full h-10 items-center justify-between  bg-black/10 '>
            <div><p className='text-white font-poppins cursor-pointer'>Icon</p></div>
            <div className='sm:hidden flex  items-center' >
                <div><Image src={`${dropDown==true?'/images/close.png':'/images/menu.png'}`} alt="Menu" width={30} height={30} className='cursor-pointer ' onClick={()=>setDropDown(!dropDown)}/></div>
                  {dropDown&&(
                <div className='flex z-10 flex-col space-y-4 text-left p-3 mt-30 ml-1 w-30  bg-white rounded-xl text-gray-900'>
                <p className=' font-poppins cursor-pointer'>Project</p>
                <p className='font-poppins cursor-pointer'>Skill</p>
                <p className=' font-poppins cursor-pointer'>Education</p>
                <p className=' font-poppins cursor-pointer'>Contact</p>
                </div>
            )}
            </div>
          
            <div className='sm:flex hidden sm:space-x-10  md:space-x-25  items-center px-3 py-3 '>
                <p className='text-white font-poppins cursor-pointer'>Project</p>
                <p className='text-white font-poppins cursor-pointer'>Skill</p>
                <p className='text-white font-poppins cursor-pointer'>Education</p>
                <p className='text-white font-poppins cursor-pointer'>Contact</p>
            </div>
        </div>
    )
}
export default NavBar