"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/assets/logo.png"
import { Avatar } from '@heroui/react';
import { authClient, signOut, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
const {data:session, isPending} = useSession();
    const router =useRouter()
//console.log(session)
    const handleSignout = async () => {
        await signOut();
        router.push('/')
    }
    return (
        <div>
            <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-semibold'><Link href="/">Home</Link></li>
        <li className='font-semibold'><Link href="/rooms">Rooms</Link></li>
        {!isPending && session && <>
      <li className='font-semibold'><Link href="/add-room">Add Room</Link></li>
      <li className='font-semibold'><Link href="/my-listings">My Listings</Link></li>
      <li className='font-semibold'><Link href="/my-bookings">My Bookings</Link></li></>}
        
      </ul>
    </div>
    <Image src={logo} className='h-[45px] w-[170px]' alt="logo"></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-semibold text-[17px]'><Link href="/">Home</Link></li>
      
      <li className='font-semibold text-[17px]'><Link href="/rooms">Rooms</Link></li>
      {!isPending && session && <>
      <li className='font-semibold text-[17px]'><Link href="/add-room">Add Room</Link></li>
      <li className='font-semibold text-[17px]'><Link href="/my-listings">My Listings</Link></li>
      <li className='font-semibold text-[17px]'><Link href="/my-bookings">My Bookings</Link></li></>}

      
    </ul>
  </div>
  <div className="navbar-end space-x-[15px]">
 {!isPending && !session ? <div className='flex gap-[10px]' >
    <Link href="/login" className="btn bg-amber-800 text-white">Login</Link>
    <Link href="/register" className="btn bg-amber-800 text-white">Register</Link>
    </div> :
        <div className='flex items-center justify-between gap-[15px]'>
           
    
    <div className="dropdown">
  <div tabIndex={0} role="button" className="btn rounded-full m-1">
    <Avatar>
        <Avatar.Image alt="image" src={session?.user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{session?.name?.charAt(0)}</Avatar.Fallback>
      </Avatar>
    <span className="text-amber-900 font-medium">{session?.user?.name}</span>
  </div>
<ul tabIndex="-1" className="dropdown-content menu bg-amber-700 rounded-box z-10 w-52 p-2 shadow-sm">

    <li className="p-0">
    <div className="flex flex-col items-start w-full px-3 py-2 gap-0">
        <p className="text-white font-semibold leading-tight">
            Welcome Back!
        </p>

        <p className="text-gray-300 text-[13px] text-sm leading-tight">
            {session?.user?.email}
        </p>
    </div>
</li>

    <li>
        <Link className='text-white' href=''>My Listings</Link>
    </li>

    <li>
        <Link className='text-white' href=''>My Bookings</Link>
    </li>

    <li>
        <button onClick={handleSignout} className='text-white font-semibold w-full'>
            <MdOutlineLogout /> LogOut
        </button>
    </li>

</ul>
</div>
      
        </div>
}
    </div>
</div>
        </div>
    );
};

export default Navbar;