"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'

const Layout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [screenWidth, setScreenWidth] = useState(0);

  //   if (typeof globalThis?.window?.innerWidth !== "undefined") {
  //     var screenWidth = window.innerWidth;     
  //  }

  useEffect(() => {
    if(globalThis?.window?.innerWidth !== undefined){
      setScreenWidth(window.innerWidth);
    }
  }, [globalThis?.window?.innerWidth]);
    

    const handleSidebarToggle = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen)
    }, [isSidebarOpen])

  return (
    <div className='relative flex flex-row items-center gap-0 h-full'>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      { screenWidth && (<Topbar screenWidth={screenWidth} isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />) }
      <div className={`${ isSidebarOpen ? 'absolute left-[256px] top-16' : 'absolute left-[96px] top-16' }
           overflow-y-auto`}>
        {
            children
        }
      </div>

    </div> 
  )
}

export default Layout
