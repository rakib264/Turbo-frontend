import React from 'react';
import Link from 'next/link';

const SidebarItemSmall = ({
    icon: Icon,
    active,
    href
}) => {
  return (
   <Link href={href}>
    <div className={`flex flex-row items-center 
         gap-3 px-4 py-3 text-white hover:bg-gray-500 hover:rounded
         ${active && 'bg-sky-700 rounded-md my-1'}
         `}>
    <Icon size={26} />
    </div>
   </Link>
  )
}

export default SidebarItemSmall
