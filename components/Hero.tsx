'use client';
import Image from "next/image"
import Profile from "./Profile"
import Model from "./Model"
import { View } from "@react-three/drei"
import { Environment, OrbitControls } from "@react-three/drei"
import Light from "./Light";
import Scene from "./Scene";
const Hero = () => {
  return (
    <div className='relative z-0 w-full min-h-screen flex flex-col'>
        
        <div className='flex flex-col md:flex md:flex-row px-8 md:px-1 lg:px-5 lg:space-x-80  md:items-center w-full '>
            <div className=' z-10 md:ml-3 ml-0 sm:ml-40 sm:px-10'>
                <Profile /> 
            </div>
            <div className=' '>
                {/* Fixed ml-50 utility to standard Tailwind ml-auto */}
                <Image 
                  src='/images/dagImg.jpg' 
                  alt='Profile Image' 
                  className='hidden  h-100 md:block rounded-[200px] ml-auto opacity-90 hover:opacity-100 transition-opacity duration-300 shadow-lg -ml-3 mt-10' 
                  width={350} 
                  height={100}
                />
            </div>
        </div>

        {/* Removed bg-white: solid backgrounds block view tracking of the Canvas underneath */}
        <div className='  md:-mt-30  w-full h-[400px] '>
           
            <Scene />
               
        </div>
    </div>
  )
}

export default Hero