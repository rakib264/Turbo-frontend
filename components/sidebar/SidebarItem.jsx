import React from 'react';
import Link from 'next/link';

const SidebarItem = ({
    icon: Icon,
    label,
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
    <div className='text-md font-semibold truncate'>{label}</div>
    </div>
   </Link>
  )
}

export default SidebarItem
