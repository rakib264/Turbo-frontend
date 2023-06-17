
"use client"

import React, { useMemo } from 'react'

import { IoDesktopOutline } from 'react-icons/io5';
import { IoPlayCircle } from 'react-icons/io5';
import { IoGrid } from 'react-icons/io5';
import { ImFileVideo } from 'react-icons/im';
import { LuFileVideo } from 'react-icons/lu';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa';
import { ImUserCheck } from 'react-icons/im';
import { FaIoxhost } from 'react-icons/fa';
import { BiBarcodeReader } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { FaCcStripe } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { MdCached } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';


import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import Image from 'next/image';
import SidebarItemSmall from './SidebarItemSmall';



const Sidebar = ({
    isSidebarOpen
}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: IoDesktopOutline,
            label: 'Dashboard',
            active: pathname === '/dashboard',
            href: '/dashboard'
        },
        {
            icon: IoPlayCircle,
            label: 'Manage Live',
            active: pathname === '/live',
            href: '/live'
        },
        {
            icon: IoGrid,
            label: 'Manage App',
            active: pathname === '/app',
            href: '/app'
        },
        {
            icon: LuFileVideo,
            label: 'Fixures',
            active: pathname === '/fixures',
            href: '/fixures'
        },
        {
            icon: ImFileVideo,
            label: 'Highlights',
            active: pathname === '/highlights',
            href: '/highlights'
        },
        {
            icon: IoMdNotificationsOutline,
            label: 'Notifications',
            active: pathname === '/notifications',
            href: '/notifications'
        },
        {
            icon: FaUsers,
            label: 'Manage Users',
            active: pathname === '/users',
            href: '/users'
        },
        {
            icon: ImUserCheck,
            label: 'Manage Admin',
            active: pathname === '/admin',
            href: '/admin'
        },
        {
            icon: FaIoxhost,
            label: 'Subsscriptions',
            active: pathname === '/subscription',
            href: '/subscription'
        },
        {
            icon: BiBarcodeReader,
            label: 'Coupon Code',
            active: pathname === '/coupons',
            href: '/coupons'
        },
        ,{
            icon: FaDollarSign,
            label: 'Payments',
            active: pathname === '/payments',
            href: '/payments'
        },
        ,{
            icon: FaCcStripe,
            label: 'Stripe',
            active: pathname === '/stripe',
            href: '/stripe'
        },
        ,{
            icon: BiNews,
            label: 'News',
            active: pathname === '/news',
            href: '/news'
        },
        ,{
            icon: MdCached,
            label: 'Cache Clean',
            active: pathname === '/cache',
            href: '/cache'
        },
        ,{
            icon: MdAdminPanelSettings,
            label: 'Administration',
            active: pathname === '/adsettings',
            href: '/adsettings'
        },
    ], [pathname])

  return (
    <div className={`hidden md:flex fixed 
         ${isSidebarOpen ? 'w-64' : 'w-24'}
         top-0 inset-x-0 ${isSidebarOpen ? 'w-64' : 'w-24'} h-screen transition`}>
      <div className={`w-full h-full overflow-y-auto ${isSidebarOpen ? 'px-5 py-4' : 'px-3 py-2'}
          bg-sky-900`}>
        <div className={`${isSidebarOpen ? 'flex' : 'hidden'} 
             space-y-2 px-3 py-2 bg-gray-100 rounded-md`}>
            <Image 
            src="/assets/logo/logo.png"
            alt="logo"
            width="160"
            height="80"
            />
        </div>
        {
            isSidebarOpen ? (
                <div className='space-y-4 font-medium'>
                    {
                        routes.map((route) => (
                            <SidebarItem key={route.label} {...route} />
                        ))
                    }
                </div>
            ) : (
                <div className='space-y-4 font-medium'>
                    {
                        routes.map((route) => (
                            <SidebarItemSmall key={route.label} {...route} />
                        ))
                    }
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Sidebar
