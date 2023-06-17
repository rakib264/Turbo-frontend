"use client"
import Image from "next/image";
import React from "react";

import { BiMenuAltLeft } from 'react-icons/bi';

const Topbar = ({
  isSidebarOpen,
  handleSidebarToggle,
  screenWidth
}) => {


  
    const width = isSidebarOpen ? screenWidth - 256 : screenWidth - 96;
    const left = isSidebarOpen ? 256 : 96;
  

  return (

    <div
    className=
    {`hidden md:flex fixed top-0 left-[${left}px]
    right-0 bg-sky-800 h-16 px-6 w-[${width}px]`}
  >
    <div className="w-full flex flex-row items-center justify-between">
    <div className='text-white font-semibold cursor-pointer'>
        <BiMenuAltLeft size={26} onClick={handleSidebarToggle} />
    </div>
        <div className="w-36 bg-sky-700 flex items-center 
             justify-between px-3 py-2 rounded-md shadow transition 
             duration-150 cursor-pointer hover:opacity-70">
            <Image 
            src="/assets/utils/download.png"
            alt="profile"
            width="30"
            height="30"
            className="rounded-full ring-2 ring-sky-200"
            />
            <div className="pl-2 text-white font-semibold truncate">
              Anis Khan
            </div>
        </div>
    </div>
  </div>
  );
};

export default Topbar;
